import { Table, Spin } from 'antd';
import ILibrary from 'src/app/interfaces/ILibrary';
import useGetLibraries from '../../hooks/useGetLibraries';

import columns from './columns';

export const Home: React.FC = () => {
  const { libraries, isLoading } = useGetLibraries();

  if (isLoading) {
    return (
      <Spin />
    );
  }

  return (
    <Table<ILibrary>
      dataSource={libraries?.map(i => ({ ...i, key: i.order }))}
      columns={columns}
    />
  );
};

export default Home;
