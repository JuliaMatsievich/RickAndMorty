import axios from 'axios';

import { BASE_URL } from '@/shared/constants';

export const apiClient = axios.create({
  baseURL: BASE_URL
});
