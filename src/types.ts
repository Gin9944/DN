export interface Guest {
  id?: string;
  name: string;
  message: string;
  attendance: boolean;
  timestamp: any;
}

export interface Photo {
  url: string;
  id: string;
}
