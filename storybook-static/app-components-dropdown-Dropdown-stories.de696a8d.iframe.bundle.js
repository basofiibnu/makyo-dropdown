"use strict";(self.webpackChunkdropdown=self.webpackChunkdropdown||[]).push([[953],{"./src/app/components/dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multiple:()=>Multiple,NoFilterOptions:()=>NoFilterOptions,Outlined:()=>Outlined,Vertical:()=>Vertical,WithPortal:()=>WithPortal,WithoutLabel:()=>WithoutLabel,WithoutSearch:()=>WithoutSearch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");const Input=({value,onChange,placeholder,className})=>(0,jsx_runtime.jsxs)("div",{className:"w-full flex items-center gap-1 px-4",children:[(0,jsx_runtime.jsx)("img",{src:"/search.svg",alt:"search",className:"w-4"}),(0,jsx_runtime.jsx)("input",{type:"text",value,onChange:e=>onChange(e.target.value),placeholder,className:`border-none border-gray-300 p-2 focus:outline-none text-xs ${className}`}),(0,jsx_runtime.jsx)("img",{src:"/closecircle.svg",alt:"close",className:"w-4 cursor-pointer",onClick:()=>onChange("")})]});Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Card=({children,onClick,className,isOutlined=!1})=>(0,jsx_runtime.jsx)("div",{onClick,className:` ${isOutlined?"bg-[#e4e4e4] outline-none border-none":"border border-gray-300"} rounded-md py-1 px-2 hover:shadow-md transition-shadow ${className}`,children}),CardContent=({children,className})=>(0,jsx_runtime.jsx)("div",{className:`text-gray-800 text-sm ${className}`,children});Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLDivElement"}],raw:"MouseEvent<HTMLDivElement>"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isOutlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}},CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Dropdown=({options,searchable=!0,usePortal=!1,multiple=!0,useFilter=!0,zIndex=1050,label,layout="horizontal",onChange,outlined=!1})=>{var _options_find;const[searchValue,setSearchValue]=(0,react.useState)(""),[selectedOptions,setSelectedOptions]=(0,react.useState)(multiple?[]:""),[isOpen,setIsOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{const handleClickOutside=event=>{dropdownRef.current&&!dropdownRef.current.contains(event.target)&&(setIsOpen(!1),setSearchValue(""))};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]);const filteredOptions=useFilter?null==options?void 0:options.filter((option=>option.label.toLowerCase().includes(searchValue.toLowerCase()))):options,renderDropdown=()=>(0,jsx_runtime.jsxs)(proxy.P.div,{className:"absolute bg-white shadow-md w-full max-h-60 rounded-sm overflow-auto border border-gray-300 mt-2",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},style:{zIndex},children:[searchable&&(0,jsx_runtime.jsx)("div",{className:"border-b",children:(0,jsx_runtime.jsx)(Input,{value:searchValue,onChange:setSearchValue,placeholder:"Search...",className:"w-full"})}),(0,jsx_runtime.jsx)("ul",{children:null==filteredOptions?void 0:filteredOptions.map((option=>{const highlightedLabel=option.label.replace(new RegExp(searchValue,"gi"),(match=>`<span class='bg-[#59bcbe]'>${match}</span>`));return(0,jsx_runtime.jsx)("li",{className:"text-xs cursor-pointer hover:bg-[#ecf5f1] transition-all duration-500 ease-in-out "+(multiple&&Array.isArray(selectedOptions)&&selectedOptions.includes(option.value)||!multiple&&selectedOptions===option.value?"bg-[#ecf5f1]":""),onClick:()=>(option=>{multiple?setSelectedOptions((prev=>{const updated=Array.isArray(prev)?prev.includes(option.value)?prev.filter((value=>value!==option.value)):[...prev,option.value]:[option.value];return onChange&&onChange(updated),updated})):(setSelectedOptions(option.value),setIsOpen(!1),onChange&&onChange(option.value))})(option),children:(0,jsx_runtime.jsx)("div",{className:"py-2 px-4",children:(0,jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:highlightedLabel}})})},option.value)}))})]});return(0,jsx_runtime.jsxs)("div",{className:"flex w-full "+("vertical"===layout?"flex-col gap-3 items-start justify-center":"flex-row gap-16 items-center justify-between"),children:[label&&(0,jsx_runtime.jsx)("label",{className:"block mb-1 text-sm text-gray-700",children:label}),(0,jsx_runtime.jsxs)("div",{className:"relative flex-1 w-full",ref:dropdownRef,children:[(0,jsx_runtime.jsxs)(Card,{onClick:()=>setIsOpen(!isOpen),className:"cursor-pointer flex justify-between items-center min-w-52",isOutlined:outlined,children:[(0,jsx_runtime.jsx)(CardContent,{children:multiple?(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap gap-2",children:Array.isArray(selectedOptions)&&selectedOptions.length>0?selectedOptions.map((value=>{var _options_find;return(0,jsx_runtime.jsxs)("div",{className:"flex items-center bg-[#f1f3f2] px-3 py-1 rounded-full",children:[(0,jsx_runtime.jsx)("span",{className:"mr-1 pb-[2px] text-xs",children:null===(_options_find=options.find((opt=>opt.value===value)))||void 0===_options_find?void 0:_options_find.label}),(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation(),(value=>{setSelectedOptions((prev=>{if(Array.isArray(prev)){const updated=prev.filter((item=>item!==value));return onChange&&onChange(updated),updated}return prev}))})(value)},children:(0,jsx_runtime.jsx)("img",{src:"/close.svg",alt:"close",className:"w-4 hover:opacity-70 transition-opacity ease-in-out duration-200"})})]},value)})):""}):selectedOptions?null===(_options_find=options.find((opt=>opt.value===selectedOptions)))||void 0===_options_find?void 0:_options_find.label:""}),(0,jsx_runtime.jsx)("img",{src:"/chevrondown.svg",alt:"chevron-down",className:"w-4 "+(isOpen?"rotate-180":"")})]}),isOpen&&(usePortal?react_dom.createPortal(renderDropdown(),document.body):renderDropdown())]})]})};Dropdown.__docgenInfo={description:"A dropdown component that allows users to select one or multiple options from a list.\r\nThe component supports searching, filtering, and rendering of options.\r\nIt also provides an option to use a portal for rendering the dropdown menu.",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},usePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1050",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\r\n  selected: string | number | (string | number)[]\r\n) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},name:"selected"}],return:{name:"void"}}},description:""},useFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},outlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const optionsList=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option with icon"},{value:"option3",label:"Long Long Option 3"},{value:"option4",label:"Long Long Long Option 4"},{value:"option5",label:"Long Long Long Long Option 5"},{value:"option6",label:"Long Long Long Long Long Option 6"}],Dropdown_stories={title:"Example/Dropdown",component:Dropdown,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{options:optionsList,label:"Label"}},Multiple={args:{options:optionsList,label:"Label",multiple:!0}},WithoutLabel={args:{options:optionsList}},WithoutSearch={args:{label:"Label",options:optionsList,searchable:!1}},WithPortal={args:{label:"Label",options:optionsList,usePortal:!0}},NoFilterOptions={args:{label:"Label",options:optionsList,useFilter:!1}},Vertical={args:{label:"Label",options:optionsList,layout:"vertical"}},Outlined={args:{label:"Label",options:optionsList,outlined:!0}},__namedExportsOrder=["Default","Multiple","WithoutLabel","WithoutSearch","WithPortal","NoFilterOptions","Vertical","Outlined"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: optionsList,\n    label: 'Label'\n  }\n}",...Default.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: optionsList,\n    label: 'Label',\n    multiple: true\n  }\n}",...Multiple.parameters?.docs?.source}}},WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: optionsList\n  }\n}",...WithoutLabel.parameters?.docs?.source}}},WithoutSearch.parameters={...WithoutSearch.parameters,docs:{...WithoutSearch.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    options: optionsList,\n    searchable: false\n  }\n}",...WithoutSearch.parameters?.docs?.source}}},WithPortal.parameters={...WithPortal.parameters,docs:{...WithPortal.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    options: optionsList,\n    usePortal: true\n  }\n}",...WithPortal.parameters?.docs?.source}}},NoFilterOptions.parameters={...NoFilterOptions.parameters,docs:{...NoFilterOptions.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    options: optionsList,\n    useFilter: false\n  }\n}",...NoFilterOptions.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    options: optionsList,\n    layout: 'vertical'\n  }\n}",...Vertical.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    options: optionsList,\n    outlined: true\n  }\n}",...Outlined.parameters?.docs?.source}}}}}]);