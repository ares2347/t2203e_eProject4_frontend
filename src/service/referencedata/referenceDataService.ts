import { HttpResponse } from "@/model/http/httpEnum";
import { IReferenceDataServcie } from "./referencedataServiceInterface";
import { httpGet } from "../http/httpService";

export class ReferenceDataService implements IReferenceDataServcie{
    private readonly url = "public/referencedata"

    getReferenceDataByType = async (referenceDataTypeCode: string) => {
        return await httpGet<ReferenceDataModel[]>(`${this.url}/${referenceDataTypeCode}`, null, false);
    }
    getStationReferenceDataByCity = async (cityCode: string) => {
        return await httpGet<ReferenceDataModel[]>(`${this.url}/stations-by-city/${cityCode}`, null, false);
    }

 }