import { render, screen } from '@testing-library/react';
import { ColumnsType } from 'antd/es/table';
import Home from '.';

interface DataType {
    id: string;
    name: string;
    is_active: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',        
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',        
    },
    {
        title: 'Status',
        dataIndex: 'is_active',
        key: 'is_active',
    }
];

describe('Test List Data Component', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // Deprecated
              removeListener: jest.fn(), // Deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
    })
    test('test header column', () => {
        render(<Home columns={columns} data={[]}/>)

        columns.map((column) => {
            if(column.title) {
                const title = screen.getByText(column.title.toString());
                expect(title).toBeDefined()
            }
        })
    })
})