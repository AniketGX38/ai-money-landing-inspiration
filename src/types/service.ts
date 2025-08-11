export interface SubService {
  id: number;
  serviceId: number;
  subServiceId: number;
  icon: React.ReactNode;
  subTitle: string;
  subDescription: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  subService: SubService[];
}
