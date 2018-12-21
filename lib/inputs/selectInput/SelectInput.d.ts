import * as React from 'react';
import '../../css/karcin-ui.css';
export interface SelectInputProps {
    /**
     * change the type
     * single and multi
     */
    type?: string | any;
    /**
     * Selectinput elements
     */
    items: Array<any> | any;
    /**
     * Manage the target value
     */
    value?: string | any;
    /**
     * Set the component's id
     */
    id?: string | any;
    /**
     * Set the title component
     */
    label?: string | any;
    /**
     * left,right,up
     */
    labelPosition?: string | any;
    /**
     * set the component's name
     */
    name?: string | any;
    /**
     * Manage the value in function
     */
    onChange?: any;
    /**
     * item active item or items
     */
    activeItem?: Array<any> | any;
    /**
     * select div className
     */
    className?: any;
    /**
     * multi select dropdown items renderer
     */
    renderer?: React.EventHandler<any> | any;
    /**
     * multi select item selected renderer function
     */
    selectedRenderer?: React.EventHandler<any> | any;
    /**
     * Select placeholder show text and disabled = false
     */
    placeholder?: string | any;
    margin?: boolean;
}
export interface SelectInputState {
    itemActive?: Array<any> | any;
    selectedItem?: Array<any> | any;
    inputText?: object | any;
    showing?: object | any;
    dropDownItems?: Object | any;
    active?: object | any;
    focusControl: object | any;
    randomId?: any;
}
export default class SelectInput extends React.Component<SelectInputProps, SelectInputState> {
    static defaultProps: Partial<SelectInputProps>;
    selectInput: any;
    constructor(props: SelectInputProps);
    UNSAFE_componentWillReceiveProps(props: SelectInputProps): void;
    render(): JSX.Element;
    setSelectedItem(): void;
    /**
     * single select type result method
     */
    singleSelectResult(): JSX.Element;
    /**
     * single select input ' un değiştiğinde value atama
     * @param event
     */
    singleHandleChange(event: any): void;
    /**
     * input focus method
     */
    inputFocus(): void;
    /**
     * input out focus methodu
     */
    inputFocusOut(): void;
    /**
     * multi input type result method
     */
    multiSelectResult(): JSX.Element;
    /**
     * seçili itemları listeleme methodu
     */
    getMultiSelectItem(): any;
    /**
     * seçilen itemları silme methodu
     * @param id
     */
    removeSelectItem(id: any): void;
    /**
     * multi select input da değişen value kontrol edip atama
     * @param event
     */
    multiHandleChangeInput(event: any): void;
    /**
     * dropdown da gösterilecek itemları array return eden method
     */
    getDropDownItems(): JSX.Element;
    /**
     * seçilen item ' ı ekleme
     * @param value
     */
    addSelectedItem(value: any): void;
    /**
     * klavya tuş kontrol ana method
     * @param event
     */
    inputKeyControl(event: any): void;
    /**
     * klavyeden üst yön tuşuna basınca dropdown item seçme methodu
     */
    arrowSelectFieldUp(): void;
    /**
     * klavyeden alt yön tuşuna basınca dropdown item seçme methodu
     */
    arrowSelectFieldDown(): void;
    /**
     * klavyeden enter ' a basınca çalışacak method
     */
    enterSelectArrowItem(): void;
    /**
     * kalvyeden back space' e basınca çalışacak method
     */
    backSpaceRemove(): void;
    /**
     * props onChange methodu çalıştırma
     */
    onChangeProps(items?: any): void;
}
