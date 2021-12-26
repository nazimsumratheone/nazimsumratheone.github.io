export class AppConst {
    public static colMenuItems = [
        { text: 'Add Column', id: 'addCol' },
        { text: 'Edit Column', id: 'editCol' },
        { text: 'Delete Column', id: 'deleteCol' },
        { text: 'Choose', id: 'choose' },
        { text: 'Freeze', id: 'freeze' },
        { text: 'Filter', id: 'filter' },
        { text: 'Multi Sort', id: 'multiSort' },
    ];

    public static rowMenuItems = [
        { text: 'Add Next', id: 'addNextRow' },
        { text: 'Add Child', id: 'addChildRow' },
        { text: 'Delete Row', id: 'deleteRow' },
        { text: 'Edit Row', id: 'editRow' },
        { text: 'Copy Row', id: 'copyRow' },
        { text: 'Cut Row', id: 'cutRow' },
        { text: 'Paste Next', id: 'pasteNext' },
        { text: 'Paste Child', id: 'pasteChild' },
        { text: 'Multi Select', id: 'multiSelect' },
    ];

    public static colCheckBoxMenus = ['freeze', 'filter', 'multiSort'];

    public static rowCheckBoxMenus = ['multiSelect'];

    public static colTypeSet: { [key: string]: Object }[] = [
        { value: 'string', text: 'Text' },
        { value: 'number', text: 'Num' },
        { value: 'Date', text: 'Date' },
        { value: 'boolean', text: 'Boolean' },
        { value: 'object', text: 'DropDownList' },
    ];

    public static dropDownSet: string[] = ['Default-1', 'Default-2', 'Default-3', 'Default-4', 'Default-5'];
    public static alignmentSet: string[] = ['Left', 'Center', 'Right', 'Justify'];
}