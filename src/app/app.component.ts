import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TreeGridComponent, SelectionSettingsModel, Column } from '@syncfusion/ej2-angular-treegrid';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { closest, createElement } from '@syncfusion/ej2-base';

import { UserService } from './services/user.service';
import { AppConst } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  data: any = [];
  columns: any = [];
  selectionOptions: SelectionSettingsModel;
  display: boolean = false;
  colMenuItems: MenuItemModel[];
  rowMenuItems: MenuItemModel[];
  colCheckBoxMenus: string[];
  rowCheckBoxMenus: string[];
  addColumnForm: FormGroup;
  addRowForm: FormGroup;
  rowContextMenuDisplay: boolean = false;
  colContextMenuDisplay: boolean = true;
  colTarget: string = '.e-headercell';
  rowTarget: string = '.e-rowcell';
  selectedColumn: any;
  selectedRow: any;
  selectedRowIndex: number;
  allowFiltering: boolean = false;
  frozenColumns: number = 0;
  sortSettings: any;
  addUpdateLabel: string = "";
  targetElement: HTMLElement;
  chooseColumns: any[];
  DialogObj: any;
  selectedRows: any = [];
  pasteMode: string = '';
  selectedMode: string = '';
  deleteMode: string = '';
  DialogAlert: any;
  colTypeSet;
  fieldsvalues = { value: "value", text: "text" }
  dropDownSet;
  alignmentSet;

  @ViewChild('treegrid') public treeGridObj: TreeGridComponent;
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  @ViewChild('ejDialog') ejDialog: DialogComponent;
  @ViewChild('chooseColDialog') chooseColDialog: DialogComponent;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.selectionOptions = { type: 'Single' };

    this.colMenuItems = AppConst.colMenuItems;
    this.rowMenuItems = AppConst.rowMenuItems;

    this.sortSettings = {
      columns: []
    }

    this.colCheckBoxMenus = AppConst.colCheckBoxMenus;
    this.rowCheckBoxMenus = AppConst.rowCheckBoxMenus;
    this.colTypeSet = AppConst.colTypeSet;
    this.dropDownSet = AppConst.dropDownSet;
    this.alignmentSet = AppConst.alignmentSet;
    this.initForms();
  }

  initForms() {
    this.addColumnForm = new FormGroup({
      colName: new FormControl('', [Validators.required]),
      colValue: new FormControl('', [Validators.required]),
      colType: new FormControl('', [Validators.required]),
      colMinWidth: new FormControl(''),
      colFontSize: new FormControl(''),
      colFontColor: new FormControl('#000000'),
      colBgColor: new FormControl('#ffffff'),
      colAlignment: new FormControl(''),
      colTextWrap: new FormControl(''),
      isColAdd: new FormControl(true)
    });
    this.addRowForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
  }

  getUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.data = response.payload.userData;
      this.columns = response.payload.columns;
      this.display = true;
      setTimeout(() => {
        this.rowContextMenuDisplay = true;
      }, 100);
    }, (err) => {
      console.log('🚀 ~ this.userService.getUsers ~ err', err);
    });
  }

  // ? Check/Uncheck of column contextmenu items
  public colBeforeClose(args: BeforeOpenCloseMenuEventArgs) {
    if (args.event && (args.event.target as Element).closest('.e-menu-item')) {
      let selectedElem: NodeList = args.element.querySelectorAll('.e-selected');
      for (let i: number = 0; i < selectedElem.length; i++) {
        let ele: Element = selectedElem[i] as Element;
        ele.classList.remove('e-selected');
      }
      let checkbox: HTMLElement = closest(args.event.target as Element, '.e-checkbox-wrapper') as HTMLElement;
      if (checkbox) {
        let frame: HTMLElement = checkbox.querySelector('.e-frame');
        if (checkbox && frame.classList.contains('e-check')) {
          frame.classList.remove('e-check');
        } else if (checkbox) {
          frame.classList.add('e-check');
        }
      }
    }
  }

  // ? Check/Uncheck of row contextmenu items
  public rowBeforeClose(args: BeforeOpenCloseMenuEventArgs) {
    if ((args.event.target as Element).closest('.e-menu-item')) {
      let selectedElem: NodeList = args.element.querySelectorAll('.e-selected');
      for (let i: number = 0; i < selectedElem.length; i++) {
        let ele: Element = selectedElem[i] as Element;
        ele.classList.remove('e-selected');
      }
      let checkbox: HTMLElement = closest(args.event.target as Element, '.e-checkbox-wrapper') as HTMLElement;
      if (checkbox) {
        let frame: HTMLElement = checkbox.querySelector('.e-frame');
        if (checkbox && frame.classList.contains('e-check')) {
          frame.classList.remove('e-check');
        } else if (checkbox) {
          frame.classList.add('e-check');
        }
      }
    }
  }

  // ? Add checkbox to column contextmenu items
  public colItemRender(args: MenuEventArgs) {
    if (this.colCheckBoxMenus.includes(args.item.id)) {
      let check: Element;
      if (args.item.id === 'freeze') {
        check = createCheckBox(createElement, false, {
          label: args.item.text,
          checked: this.frozenColumns > 0 ? true : false
        });
      } else {
        check = createCheckBox(createElement, false, {
          label: args.item.text,
          checked: false
        });
      }
      args.element.innerHTML = '';
      args.element.appendChild(check);
    }
  }

  // ? Add checkbox to row contextmenu items
  public rowItemRender(args: MenuEventArgs) {
    if (this.rowCheckBoxMenus.includes(args.item.id)) {
      let check: Element = createCheckBox(createElement, false, {
        label: args.item.text,
        checked: this.selectionOptions.type == 'Multiple' ? true : false
      });
      args.element.innerHTML = '';
      args.element.appendChild(check);
    }
  }

  // ? On column context menu open
  onColContextMenuBeforeOpen(event) {
    let path: HTMLElement[] = event.event.path;
    path.forEach((element) => {
      if (element.classList && element.classList.contains('e-headercell')) {
        const headerCell: HTMLElement = element.querySelector('span.e-headertext');
        const columnName: string = headerCell.innerText;
        this.selectedColumn = this.columns.find(col => col.headerText === columnName);
      }
    })
    let menuItems: HTMLElement = event.element;
    let multiSortItem = menuItems.querySelector('li#multiSort')
    let filterItem = menuItems.querySelector('li#filter')
    let multiSortCheckBox = multiSortItem.querySelector('.e-frame');
    let filterCheckBox = filterItem.querySelector('.e-frame');
    let index = this.sortSettings.columns.findIndex((col) => {
      return col.field === this.selectedColumn.field;
    });
    if (this.treeGridObj.allowFiltering) {
      filterCheckBox.classList.add('e-check');
    } else {
      filterCheckBox.classList.remove('e-check');
    }
    if (index > -1) {
      multiSortCheckBox.classList.add('e-check');
    } else {
      multiSortCheckBox.classList.remove('e-check');
    }
  }

  // ? On row context menu open
  onRowContextMenuBeforeOpen(event) {
    let path: HTMLElement[] = event.event.path;
    path.forEach((element) => {
      if (element.classList && element.classList.contains('e-row')) {
        const cells: any = element.children;
        const rowId: string = cells[0].innerText;
        this.selectedRow = this.data.find(row => row.id === rowId);
        this.selectedRowIndex = this.data.map(function (e) { return e.id }).indexOf(rowId);
      }
    })
  }

  // ? On column context menu item click
  public colItemSelect(args: MenuEventArgs): void {
    switch (args.item.id) {
      case 'filter':
        this.changeFilter();
        break;
      case 'freeze':
        this.freezeColumns(args);
        break;
      case 'multiSort':
        this.multiSort(args);
        break;
      case 'addCol':
        this.addColumn(true);
        break;
      case 'editCol':
        this.addColumn(false);
        break;
      case 'deleteCol':
        this.deleteColumn();
        break;
      case 'choose':
        this.openChooseColDialog();
        break;
    }
  }

  // ? On row context menu item click
  public rowItemSelect(args: MenuEventArgs): void {
    switch (args.item.id) {
      case 'multiSelect':
        this.changeRowSelectionOption();
        break;
      case 'addNextRow':
        this.addNextRow(args);
        break;
      case 'copyRow':
        this.copyRow(args);
        break;
      case 'cutRow':
        this.cutRow(args);
        break;
      case 'pasteNext':
        this.pasteMode = 'Next';
        this.paste(args);
        break;
      case 'pasteChild':
        this.pasteMode = 'Child';
        this.paste(args);
        break;
      case 'deleteRow':
        this.deleteRow(args);
        break;
    }
  }

  changeFilter() {
    this.hideContextMenus();
    this.treeGridObj.allowFiltering = !this.treeGridObj.allowFiltering;
    this.refreshTreeGrid();
  }

  freezeColumns(args: MenuEventArgs) {
    this.display = false;
    this.hideContextMenus();
    let checkboxEle = args.element.querySelector('span.e-frame.e-icons');
    if (checkboxEle.classList.contains('e-check')) {
      this.frozenColumns = 0;
    } else {
      const colIndex = this.columns.map(i => i.field).indexOf(this.selectedColumn.field);
      this.frozenColumns = colIndex + 1;
    }
    this.hardRefreshTreeGrid();
  }

  multiSort(args: MenuEventArgs) {
    this.hideContextMenus();
    this.display = false;
    let checkboxEle = args.element.querySelector('span.e-frame.e-icons');
    if (checkboxEle.classList.contains('e-check')) {
      this.treeGridObj.removeSortColumn(this.selectedColumn.field);
      this.sortSettings.columns = this.sortSettings.columns.filter((col) => col.field != this.selectedColumn.field);
    } else {
      this.treeGridObj.sortByColumn(this.selectedColumn.field, 'Ascending', true);
      this.sortSettings.columns.push({ direction: 'Ascending', field: this.selectedColumn.field });
    }
    this.hardRefreshTreeGrid();
  }

  addColumn(isAdd: boolean) {
    this.hideContextMenus();
    this.DialogAlert?.hide();
    this.addUpdateLabel = isAdd ? "Add New Column" : "Edit New Column";
    if (!isAdd) {
      this.addColumnForm.patchValue({
        colName: this.selectedColumn.headerText,
        colValue: '',
        colType: this.selectedColumn.type,
        isColAdd: isAdd
      });
    }
    else {
      this.addColumnForm.reset();
      this.addColumnForm.patchValue({
        colType: 'string',
        isColAdd: isAdd
      });
    }
    this.ejDialog.show();
  }


  saveCol() {
    const isAdd = this.addColumnForm.get('isColAdd').value;
    const colName = this.addColumnForm.get('colName').value;
    const noSpaceColName = colName.replace(/ /g, "");
    const colType = this.addColumnForm.get('colType').value;
    const colVal = this.addColumnForm.get('colValue').value;
    const minWidth = this.addColumnForm.get('colMinWidth').value;
    const fontSize = this.addColumnForm.get('colFontSize').value;
    const fontColor = this.addColumnForm.get('colFontColor').value;
    const bgColor = this.addColumnForm.get('colBgColor').value;
    const alignMent = this.addColumnForm.get('colAlignment').value;
    const textWrap = this.addColumnForm.get('colTextWrap').value;
    var style = document.createElement('style');
    style.innerHTML = `.${noSpaceColName}css { color: ${fontColor} !important; font-size: ${fontSize}px !important; background-color: ${bgColor} !important; min-width: ${minWidth}px !important; text-align: ${alignMent} !important; }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    if (isAdd) {
      if (!this.columns.some(x => x.field.toLowerCase() == noSpaceColName.toLowerCase())) {
        let newCol = { field: noSpaceColName, headerText: colName, headerTextAlign: alignMent, type: colType, customAttributes: { class: `${noSpaceColName}css` } };
        let colObj: Column = new Column(newCol);
        this.columns.push(colObj);
        console.log("🚀  ~ saveCol ~ this.columns", this.columns)
        this.data.forEach(x => {
          x[noSpaceColName] = colVal;
        });
      }
      else {
        this.DialogAlert = DialogUtility.alert({
          content: "This column name is already exists. Please try again with different column name!",
          okButton: { text: 'OK', click: this.addColumn.bind(this, true) },
          animationSettings: { effect: 'Zoom' }
        });
      }
    }
    else {
      let newCol = { field: this.selectedColumn.field, headerText: colName, headerTextAlign: alignMent, type: colType, customAttributes: { class: `${noSpaceColName}css` } };
      this.columns[this.selectedColumn.index] = new Column(newCol);
      if (!!colVal) {
        this.data.forEach(x => {
          if (x.hasOwnProperty(this.selectedColumn.field)) {
            x[this.selectedColumn.field] = colVal;
          }
        });
      }
    }
    this.cancelCol();
    this.addColumnForm.reset();
  }

  cancelCol() {
    this.ejDialog.hide();
    this.refreshTreeGrid();
  }

  deleteColumn() {
    const index = this.treeGridObj.columns.findIndex(x => x.field == this.selectedColumn.field);
    this.deleteMode = 'Column';
    this.onOpenDialog(index);
  }

  onOpenDialog(index: any): void {
    this.hideContextMenus();
    let title: string = 'Delete Column';
    let content: string = 'Are you sure you want to delete this column?';
    if (this.deleteMode == 'Row') {
      title = 'Delete Row';
      content = 'Are you sure you want to delete this row?';
    }
    this.DialogObj = DialogUtility.confirm({
      title: title,
      content: content,
      isModal: true,
      okButton: { text: 'OK', click: this.okClick.bind(this, index) },
      cancelButton: { text: 'Cancel', click: this.cancelClick.bind(this) },
      animationSettings: { effect: 'Zoom' },
      position: { X: 'center', Y: 'center' }
    });
  }

  okClick(index: any): void {
    if (this.deleteMode == 'Column') {
      if (index > -1) {
        this.treeGridObj.columns.splice(index, 1);
        this.treeGridObj.refreshColumns();
      }
    }
    if (this.deleteMode == 'Row') {
      this.data.splice(this.selectedRowIndex, 1);
      this.treeGridObj.refresh();
    }
    this.refreshTreeGrid();
    this.cancelClick();
  }

  cancelClick(): void {
    this.DialogObj.close();
  }

  openChooseColDialog() {
    this.hideContextMenus();
    this.chooseColumns = this.columns;
    this.chooseColDialog.show();
  }

  chooseCol() {
    this.hideContextMenus();
    this.chooseColumns.forEach((col, index) => {
      this.columns[index].visible = col.visible;
    });
    this.treeGridObj.refreshColumns();
    this.cancelChooseCol();
  }

  changeChooseCol(event, column) {
    this.chooseColumns.forEach(col => {
      if (col.field == column.field) {
        col.visible = event.target.checked;
      }
    });
  }

  cancelChooseCol() {
    this.chooseColumns = [];
    this.chooseColDialog.hide();
    this.refreshTreeGrid();
  }

  changeRowSelectionOption() {
    this.display = false;
    this.hideContextMenus();
    this.selectionOptions.type = this.selectionOptions.type == 'Multiple' ? 'Single' : 'Multiple';
    this.hardRefreshTreeGrid();
  }

  addNextRow(args: MenuEventArgs) {
    console.log('🚀 ~ addNext ~ args', args);
  }

  copyRow(args: MenuEventArgs) {
    this.selectedMode = 'Copy';
    let selectedRows: any = this.treeGridObj.getSelectedRecords();
    let selectedRowsIds: any = selectedRows.map(row => row.id);
    this.selectedRows = selectedRowsIds.map(row => {
      let index = this.data.map(function (e) { return e.id }).indexOf(row);
      let newRow = { ...this.data[index] };
      newRow.id = this.userService.getUniqueId(4);
      return newRow;
    });
  }

  cutRow(args: MenuEventArgs) {
    this.selectedMode = 'Cut';
    let selectedRows: any = this.treeGridObj.getSelectedRecords();
    let selectedRowsIds: any = selectedRows.map(row => row.id);
    this.selectedRows = selectedRowsIds.map(row => {
      let index = this.data.map(function (e) { return e.id }).indexOf(row);
      let newRow = { ...this.data[index] };
      return newRow;
    });
  }

  paste(args: MenuEventArgs) {
    switch (this.pasteMode) {
      case 'Child':
        this.pasteChild();
        break;
      case 'Next':
        this.pasteNext();
        break;
      default:
        return
    }
  }

  pasteChild() {
    if (this.selectedRows.length == 0) {
      return;
    }
    this.hideContextMenus();
    if (!this.data[this.selectedRowIndex].subUsers) {
      this.data[this.selectedRowIndex].subUsers = [];
    }
    this.data[this.selectedRowIndex].subUsers.push(...this.selectedRows);
    if (this.selectedMode == 'Cut') {
      this.selectedRows.forEach(row => {
        this.data = this.data.filter(item => item.id != row.id);
      });
    }
    this.selectedRows = [];
    this.refreshTreeGrid();
  }

  pasteNext() {
    if (this.selectedRows.length == 0) {
      return;
    }
    this.hideContextMenus();
    let selectedRowsIndexes = [];
    if (this.selectedMode == 'Cut') {
      this.selectedRows.forEach(row => {
        let index = this.data.findIndex(x => x.id == row.id);
        selectedRowsIndexes.push(index);
      });
      selectedRowsIndexes.forEach(index => {
        if (index < this.selectedRowIndex) {
          this.selectedRowIndex--;
        }
      })
      this.selectedRows.forEach((row, index) => {
        this.data = this.data.filter(item => item.id != row.id);
      });
    }
    this.data.splice(this.selectedRowIndex + 1, 0, ...this.selectedRows);
    this.selectedRows = [];
    this.refreshTreeGrid();
  }

  deleteRow(args: MenuEventArgs) {
    this.deleteMode = 'Row';
    this.onOpenDialog(null);
  }

  actionHandler(args: any) {
    if (args.name === 'actionComplete' && args.requestType === 'sorting') {
      this.display = false;
      this.hideContextMenus();
      let sortedColumns = this.treeGridObj.sortSettings.columns;
      this.sortSettings.columns = [];
      sortedColumns.forEach(col => {
        this.sortSettings.columns.push({ field: col.field, direction: col.direction });
      });
      this.hardRefreshTreeGrid();
    }
  }

  hideContextMenus() {
    this.rowContextMenuDisplay = false;
    this.colContextMenuDisplay = false;
  }

  refreshTreeGrid() {
    this.treeGridObj.refreshColumns();
    this.treeGridObj.refresh();
    setTimeout(() => {
      this.rowContextMenuDisplay = true;
      this.colContextMenuDisplay = true;
    }, 200);
  }

  hardRefreshTreeGrid() {
    setTimeout(() => {
      this.display = true;
    }, 100);
    setTimeout(() => {
      this.rowContextMenuDisplay = true;
      this.colContextMenuDisplay = true;
    }, 200);
  }
}
