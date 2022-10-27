import React, {useState} from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import html2canvas from 'html2canvas';
import { Button } from 'antd';




export default function Example() {
    const [count, setCount] = useState(1);

    return (

        <div>
            <p>You clicked {count} times</p>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

