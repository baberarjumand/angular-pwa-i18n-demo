import { Company } from './../model/company.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyDbService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  MOCK_API_URL = 'https://5f59cabb8040620016ab960d.mockapi.io/' + 'companies';

  constructor(private http: HttpClient) {}

  getFirstTenCompanies(): Observable<Company[]> {
    const params = new HttpParams().set('page', '1').set('limit', '9');
    return this.http.get<Company[]>(this.MOCK_API_URL, { params });
  }

  getCompanyById(companyId: string): Observable<Company> {
    return this.http.get<Company>(this.MOCK_API_URL + '/' + companyId);
  }

  updateCompanyPhraseByCompanyId(
    company: Company,
    newPhrase: string
  ): Observable<Company> {
    const tempObj: Company = {
      id: company.id,
      name: company.name,
      phrase: newPhrase,
      city: company.city,
      country: company.country,
      imageUrl: company.imageUrl,
    };

    return this.http.put<Company>(
      this.MOCK_API_URL + '/' + company.id,
      tempObj
    );
  }

  deleteCompanyById(companyId): Observable<any> {
    return this.http.delete(this.MOCK_API_URL + '/' + companyId);
  }
}
