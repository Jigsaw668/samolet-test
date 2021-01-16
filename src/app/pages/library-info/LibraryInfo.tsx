import { Spin, Descriptions } from 'antd';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ILibrary from 'src/app/interfaces/ILibrary';
import useGetLibraries from '../../hooks/useGetLibraries';

import './LibraryInfo.scss';

export const LibraryInfo: React.FC = () => {
  const location = useLocation();
  const [library, setLibrary] = useState<ILibrary | undefined>(undefined);
  const { libraries, isLoading } = useGetLibraries();

  useEffect(() => {
    if (libraries !== undefined) {
      setLibrary(libraries.find(i => i.order === +location.pathname.replace('/libraries/library/', '')));
    }
  }, [location, libraries]);

  if (isLoading && library) {
    return (
      <Spin />
    );
  }

  return (
    <Descriptions title='Информация о библиотеках' layout='horizontal' bordered column={1} size='middle'>
      <Descriptions.Item label='Регион'>{library?.territory}</Descriptions.Item>
      <Descriptions.Item label='Кол-во библиотек'>{library?.libraries}</Descriptions.Item>
      <Descriptions.Item label='Кол-во библиотек с компьютерами'>{library?.libraries_computers}</Descriptions.Item>
      <Descriptions.Item label='Кол-во компьютеров'>{library?.computers}</Descriptions.Item>
      <Descriptions.Item label='Кол-во библиотек с интернетом'>{library?.internet}</Descriptions.Item>
      <Descriptions.Item label='Кол-во интернет каталогов'>{library?.internet_catalogs}</Descriptions.Item>
      <Descriptions.Item label='Кол-во сайтов библиотек'>{library?.site}</Descriptions.Item>
      <Descriptions.Item label='Среднее кол-во клиентов'>{library?.users}</Descriptions.Item>
      <Descriptions.Item label='Среднее кол-во детей'>{library?.users_children}</Descriptions.Item>
      <Descriptions.Item label='Среднее кол-во посещений'>{library?.visits}</Descriptions.Item>
      <Descriptions.Item label='Среднее кол-во посещений веб-сайтов'>{library?.visits_sites}</Descriptions.Item>
    </Descriptions>
  );
};

export default LibraryInfo;
