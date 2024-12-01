import { useMemo } from 'react';
import config from '../config';

const useConfig = (): typeof config => {
    return useMemo(() => config, []);
};

export default useConfig;
