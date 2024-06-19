import React, { useState } from "react";

function Management() {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckedChange = (e) => {
        const { name, checked } = e.target;
        setCheckedItems(prevCheckedItems => (
            checked
                ? [...prevCheckedItems, name]
                : prevCheckedItems.filter(item => item !== name)
        ));
    }

    return (
        <div>
            {
                ['Item 1', 'Item 2', 'Item 3', 'Item 4'].map(item => (
                    <label key={item}>
                        <input
                            type="checkbox"
                            name={item}
                            checked={checkedItems.includes(item)}
                            onChange={handleCheckedChange}
                        />
                        {item}
                    </label>
                ))
            }
            <p>Checked items: {checkedItems.join(', ')}</p>
        </div>
    );
}

export default Management;
