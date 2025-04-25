"use client"
import { useState } from "react";

// TypeScript interfaces
interface FilterOption {
  [key: string]: boolean;
}

interface FilterState {
  pickupPoints: FilterOption;
  pickupTimes: FilterOption;
  dropPoints: FilterOption;
  dropTimes: FilterOption;
}

const FilterSidebar = () => {
  // State for filter options
  const [filters, setFilters] = useState<FilterState>({
    pickupPoints: {
      "Tansen": false,
      "Pokhara": false,
      "Butwal": false,
      "Palpa": false,
    },
    pickupTimes: {
      "Morning (6AM-10AM)": false,
      "Day (10AM-4PM)": false,
      "Evening (4PM-8PM)": false,
      "Night (8PM-6AM)": false,
    },
    dropPoints: {
      "Kathmandu": false,
      "Bhaktapur": false, 
      "Lalitpur": false,
      "Chitwan": false,
    },
    dropTimes: {
      "Morning (6AM-10AM)": false,
      "Day (10AM-4PM)": false,
      "Evening (4PM-8PM)": false,
      "Night (8PM-6AM)": false,
    }
  });

  // Clear filter section
  const clearFilterSection = (section: keyof FilterState) => {
    setFilters({
      ...filters, 
      [section]: Object.keys(filters[section]).reduce((obj, key) => {
        obj[key] = false;
        return obj;
      }, {} as FilterOption)
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (section: keyof FilterState, option: string) => {
    setFilters({
      ...filters,
      [section]: {
        ...filters[section],
        [option]: !filters[section][option]
      }
    });
  };

  // Render filter section
  const renderFilterSection = (title: string, section: keyof FilterState) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-800">{title}</h3>
          <button 
            onClick={() => clearFilterSection(section)}
            className="text-xs text-purple-800 hover:text-primary-100"
          >
            Clear
          </button>
        </div>
        <div className="space-y-2">
          {Object.keys(filters[section]).map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={`${section}-${option}`}
                checked={filters[section][option]}
                onChange={() => handleCheckboxChange(section, option)}
                className="h-4 w-4 rounded border-gray-300 text-purple-800"
              />
              <label htmlFor={`${section}-${option}`} className="ml-2 text-sm text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <button 
          onClick={() => {
            const resetFilters = Object.keys(filters).reduce((acc, section) => {
              acc[section as keyof FilterState] = Object.keys(filters[section as keyof FilterState]).reduce((obj, key) => {
                obj[key] = false;
                return obj;
              }, {} as FilterOption);
              return acc;
            }, {} as FilterState);
            setFilters(resetFilters);
          }}
          className="text-sm text-purple-800 hover:text-primary-100"
        >
          Clear All
        </button>
      </div>

      {/* Filter Sections */}
      {renderFilterSection("Pickup Point", "pickupPoints")}
      {renderFilterSection("Pickup Time", "pickupTimes")}
      {renderFilterSection("Drop Point", "dropPoints")}
      {renderFilterSection("Drop Time", "dropTimes")}
    </div>
  );
};

export default FilterSidebar;