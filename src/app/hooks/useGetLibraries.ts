import useSWR from 'swr';
import Axios from '../../utils/Axios';

import ILibrary from '../interfaces/ILibrary';

import { GET_DATA } from '../../settings/endpoints';

export interface IGetLibraries {
  libraries: ILibrary[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const fetcher = (url: string): Promise<ILibrary[]> => Axios(url).then(res => res.data);

export default function useGetLibraries(): IGetLibraries {
  const { data, error } = useSWR(GET_DATA, fetcher);

  return {
    libraries: data,
    isLoading: !error && !data,
    isError: error,
  };
}
