import { CompanyDbService } from './../../shared/services/company-db.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from 'src/app/shared/model/company.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit, OnDestroy {
  companyId: string;
  companySub: Subscription;
  company: Company;
  companyForm: FormGroup;
  companyUpdateSub: Subscription;
  deleteCompanyFlag = false;
  deleteCompanySub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyDbService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyPhrase: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
    });

    this.companyId = this.route.snapshot.paramMap.get('id');

    this.companySub = this.companyService
      .getCompanyById(this.companyId)
      .subscribe((company) => {
        // console.log(company);
        this.company = company;
      });
  }

  ngOnDestroy(): void {
    if (this.companySub) {
      this.companySub.unsubscribe();
    }
    if (this.companyUpdateSub) {
      this.companyUpdateSub.unsubscribe();
    }
    if (this.deleteCompanySub) {
      this.deleteCompanySub.unsubscribe();
    }
  }

  updateCompanyPhrase(): void {
    if (this.companyForm.valid) {
      // console.log(this.companyForm.value.companyPhrase);
      const newPhrase = this.companyForm.value.companyPhrase;
      this.companyUpdateSub = this.companyService
        .updateCompanyPhraseByCompanyId(this.company, newPhrase)
        .subscribe((response) => {
          // console.log(response);
          this.ngOnInit();
        });
    }
  }

  deleteCompany(): void {
    if (this.deleteCompanyFlag) {
      // delete company
      this.companyService
        .deleteCompanyById(this.company.id)
        .subscribe((response) => {
          console.log('Deleted:', response);
          this.router.navigate(['']);
        });
    } else {
      this.deleteCompanyFlag = true;
      setTimeout(() => {
        this.deleteCompanyFlag = false;
      }, 2000);
    }
  }
}
