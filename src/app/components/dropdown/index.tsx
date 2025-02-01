'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Input } from '../input';
import { Card, CardContent } from '../card';

interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  searchable?: boolean;
  usePortal?: boolean;
  multiple?: boolean;
  zIndex?: number;
  label?: string;
  onChange?: (
    selected: string | number | (string | number)[]
  ) => void;
  useFilter?: boolean;
  layout?: 'horizontal' | 'vertical';
}

/**
 * A dropdown component that allows users to select one or multiple options from a list.
 * The component supports searching, filtering, and rendering of options.
 * It also provides an option to use a portal for rendering the dropdown menu.
 *
 * @param {DropdownOption[]} options - The list of options to display in the dropdown.
 * @param {boolean} [searchable=true] - Whether to display a search input to filter options.
 * @param {boolean} [usePortal=false] - Whether to render the dropdown menu in a portal.
 * @param {boolean} [multiple=false] - Whether to allow multiple selections.
 * @param {number} [zIndex=1050] - The z-index of the dropdown menu.
 * @param {string} [label] - The label to display above the dropdown.
 * @param {'horizontal'|'vertical'} [layout='horizontal'] - The layout of the dropdown.
 * @param {(selected: string|number|(string|number)[]) => void} [onChange] - A callback function to call when the selected options change.
 * @param {boolean} [useFilter=true] - Whether to filter options based on the search input.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  searchable = true,
  usePortal = false,
  multiple = false,
  useFilter = true,
  zIndex = 1050,
  label,
  layout = 'horizontal',
  onChange,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<
    string | number | (string | number)[]
  >(multiple ? [] : '');

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchValue('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredOptions = useFilter
    ? options?.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : options;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: DropdownOption) => {
    if (multiple) {
      setSelectedOptions((prev) => {
        const updated = Array.isArray(prev)
          ? prev.includes(option.value)
            ? prev.filter((value) => value !== option.value)
            : [...prev, option.value]
          : [option.value];
        if (onChange) {
          onChange(updated);
        }
        return updated;
      });
    } else {
      setSelectedOptions(option.value);
      setIsOpen(false);
      if (onChange) {
        onChange(option.value);
      }
    }
  };

  const handleRemoveSelected = (value: string | number) => {
    setSelectedOptions((prev) => {
      if (Array.isArray(prev)) {
        const updated = prev.filter((item) => item !== value);
        if (onChange) {
          onChange(updated);
        }
        return updated;
      }
      return prev;
    });
  };

  const renderDropdown = () => (
    <motion.div
      className="absolute bg-white shadow-md w-full max-h-60 rounded-sm overflow-auto border border-gray-300 mt-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{ zIndex }}
    >
      {searchable && (
        <div className="border-b">
          <Input
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search..."
            className="w-full"
          />
        </div>
      )}
      <ul>
        {filteredOptions?.map((option) => {
          const highlightedLabel = option.label.replace(
            new RegExp(searchValue, 'gi'),
            (match) => `<span class='bg-[#59bcbe]'>${match}</span>`
          );

          return (
            <li
              key={option.value}
              className={`text-xs cursor-pointer hover:bg-[#ecf5f1] transition-all duration-500 ease-in-out ${
                (multiple &&
                  Array.isArray(selectedOptions) &&
                  selectedOptions.includes(option.value)) ||
                (!multiple && selectedOptions === option.value)
                  ? 'bg-[#ecf5f1]'
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <div className="py-2 px-4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightedLabel,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );

  return (
    <div
      className={`flex w-full ${
        layout === 'vertical'
          ? 'flex-col gap-3 items-start justify-center'
          : 'flex-row gap-16 items-center justify-between'
      }`}
    >
      {label && (
        <label className="block mb-1 text-sm text-gray-700">
          {label}
        </label>
      )}
      <div className="relative flex-1 w-full" ref={dropdownRef}>
        <Card
          onClick={toggleDropdown}
          className="cursor-pointer flex justify-between items-center"
        >
          <CardContent>
            {multiple ? (
              <div className="flex flex-wrap gap-2">
                {Array.isArray(selectedOptions) &&
                selectedOptions.length > 0
                  ? selectedOptions.map((value) => (
                      <div
                        key={value}
                        className="flex items-center bg-[#f1f3f2] px-3 py-1 rounded-full"
                      >
                        <span className="mr-1 pb-[2px] text-xs">
                          {
                            options.find((opt) => opt.value === value)
                              ?.label
                          }
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveSelected(value);
                          }}
                        >
                          <img
                            src="/close.svg"
                            alt="close"
                            className="w-4 hover:opacity-70 transition-opacity ease-in-out duration-200"
                          />
                        </button>
                      </div>
                    ))
                  : 'Select options'}
              </div>
            ) : selectedOptions ? (
              options.find((opt) => opt.value === selectedOptions)
                ?.label
            ) : (
              'Select an option'
            )}
          </CardContent>
          <img
            src="/chevrondown.svg"
            alt="chevron-down"
            className={`w-4 ${isOpen ? 'rotate-180' : ''}`}
          />
        </Card>

        {isOpen &&
          (usePortal
            ? ReactDOM.createPortal(renderDropdown(), document.body)
            : renderDropdown())}
      </div>
    </div>
  );
};
