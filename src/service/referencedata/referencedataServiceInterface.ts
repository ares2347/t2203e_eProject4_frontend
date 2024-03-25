import { HttpResponse } from "@/model/http/httpEnum";

export interface IReferenceDataServcie {
    getReferenceDataByType: (referenceDataTypeCode: string) => Promise<HttpResponse<ReferenceDataModel[]>>;
    getStationReferenceDataByCity: (scityCode: string ) => Promise<HttpResponse<ReferenceDataModel[]>>;
}