/* eslint-disable @typescript-eslint/no-use-before-define */
import { Input, Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import ILibrary from '../../interfaces/ILibrary';

interface IFilterDropdown {
  setSelectedKeys: (selectedKeys: string[]) => (selectedKeys: string[]) => string[],
  selectedKeys: string[];
  confirm: () => void;
  clearFilters: () => [];
}

const columns: ColumnsType<ILibrary> = [
  {
    title: 'Регион',
    dataIndex: 'territory',
    key: 'territory',
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: IFilterDropdown): JSX.Element =>
      <div style={{ padding: 8 }}>
        <Input
          placeholder='Поиск региона'
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(confirm)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Поиск
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
            Сброс
          </Button>
        </Space>
      </div>,
    filterIcon: (filtered: string): JSX.Element => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record): boolean => record.territory
      ? record.territory.toString().toLowerCase().includes(String(value).toLowerCase())
      : false,
    render: (text: string, record: ILibrary): JSX.Element => <NavLink to={`/libraries/library/${record.order}`}>{text}</NavLink>,
  },
  {
    title: 'Кол-во библиотек',
    dataIndex: 'libraries',
    key: 'libraries',
    sorter: (a: ILibrary, b: ILibrary): number => a.libraries - b.libraries,
  },
];

function handleSearch(confirm: () => void) {
  confirm();
}

function handleReset(clearFilters: () => []) {
  clearFilters();
}

export default columns;
