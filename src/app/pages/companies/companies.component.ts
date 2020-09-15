import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company } from 'src/app/shared/model/company.model';
import { CompanyDbService } from 'src/app/shared/services/company-db.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  companies: Company[];
  companiesSub: Subscription;

  constructor(private companyService: CompanyDbService) {}

  ngOnInit(): void {
    this.companiesSub = this.companyService
      .getFirstTenCompanies()
      .subscribe((companies) => {
        // console.log(companies);
        this.companies = companies;
      });
  }

  ngOnDestroy(): void {
    if (this.companiesSub) {
      this.companiesSub.unsubscribe();
    }
  }
}
