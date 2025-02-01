# Dropdown Component

## Usage

To use the Dropdown component in your project, follow these steps:

1. Import the Dropdown component:
    ```javascript
    import Dropdown from './path/to/Dropdown';
    ```

2. Use the Dropdown component in your JSX:
    ```jsx
    <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={(selectedOption) => console.log(selectedOption)}
    />
    ```

### Props

- `id` (string): A unique id for dropdown.
- `options` (array): An array of options to display in the dropdown.
- `searchable` (boolean): If true, enables a search input to filter options. Default is `true`.
- `usePortal` (boolean): If true, renders the dropdown menu in a portal. Default is `false`.
- `multiple` (boolean): If true, allows multiple selections. Default is `false`.
- `useFilter` (boolean): If true, filters options based on the search input. Default is `true`.
- `zIndex` (number): The z-index of the dropdown menu. Default is `1050`.
- `label` (string): A label for the dropdown.
- `layout` (string): The layout of the dropdown, either 'horizontal' or 'vertical'. Default is 'horizontal'.
- `onSelect` (function): A callback function that is called when an option is selected. The selected option is passed as an argument.

### Example

```jsx
import React from 'react';
import Dropdown from './path/to/Dropdown';

function App() {
    const handleSelect = (selectedOption) => {
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <h1>My Dropdown Example</h1>
            <Dropdown
                options={['Option 1', 'Option 2', 'Option 3']}
                onSelect={handleSelect}
                searchable={true}
                usePortal={false}
                multiple={false}
                useFilter={true}
                zIndex={1050}
                label="Select an option"
                layout="horizontal"
            />
        </div>
    );
}

export default App;
