import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDatepickerModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import {default as _rollupMoment, Moment} from 'moment';
import {MatDatepicker} from '@angular/material/datepicker';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface LocationGroup {
  letter: string;
  names: string[];
}
// export interface User {
//   name: string;
// }

export interface IndustryGroup {
  letter: string;
  names: string[];
}
export const filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-enter-details-form',
  templateUrl: './enter-details-form.component.html',
  styleUrls: ['./enter-details-form.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class EnterDetailsFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  dateStart = new FormControl(moment());
  dateEnd = new FormControl(moment());
  registered = false;
  submitted = false;
  detailsForm: FormGroup = this.formBuilder.group({
      productName: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      audience: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      location: ['', [Validators.required]],
      price: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
  });

   locations: LocationGroup[] = [{
    letter: 'A',
    names: ['Ambalangoda, Galle', 'Ampara, Ampara', 'Anuradhapura, Anuradhapura']
  }, {
    letter: 'B',
    names: ['Badulla, Badulla', 'Balangoda, Ratnapura', 'Bambalapitiya, Colombo', 'Bandarawela, Badulla', 'Battaramulla, Colombo',
      'Batticaloa, Batticaloa', 'Beruwala, Kalutara']
  }, {
    letter: 'C',
    names: ['Chavakachcheri, Jaffna', 'Chillaw, Puttalam']
  }, {
    letter: 'D',
    names: ['Dambulla, Matale', 'Dehiwela-Mount Lavinia, Colombo']
  }, {
    letter: 'E',
    names: ['Eravur, Batticaloa']
  }, {
    letter: 'F',
    names: ['Fort, Colombo']
  }, {
    letter: 'G',
    names: ['Galle, Galle', 'Gampaha, Gampaha', 'Gampola, Kandy']
  }, {
    letter: 'H',
    names: ['Hambantota, Hambantota', 'Haputale, Badulla', 'Hatton, Nuwara Eliya', 'Horana, Kalutara']
  }, {
    letter: 'J',
    names: ['Ja-Ela, Gampaha', 'Jaffna, Jaffna']
  }, {
    letter: 'K',
    names: ['Kadawatha', 'Kalmunai, Ampara', 'Kalutara, Kalutara', 'Kandy, Kandy', 'Kattankudy, Batticaloa', 'Katunayake, Gampaha',
      'Kegalle, Kegalle', 'Kelaniya, Gampaha', 'Kolonnawa, Colombo', 'Kollupitiya, Colombo', 'Kohuwala, Colombo', 'Kottawa, Colombo',
      'Kuliyapitiya, Kurunegala', 'Kurunegala, Kurunegala']
  }, {
    letter: 'M',
    names: ['Maharagama, Colombo', 'Mannar, Mannar', 'Matale, Matale', 'Matara, Matara', 'Minuwangoda, Gampaha', 'Monaragala, Monaragala',
      'Moratuwa, Colombo']
  }, {
    letter: 'N',
    names: ['Nawala, Colombo', 'Nawalapitiya, Kandy', 'Negombo, Gampaha', 'Nugegoda, Colombo', 'Nuwara Eliya, Nuwara Eliya']
  }, {
    letter: 'P',
    names: ['Panadura, Kalutara', 'Peliyagoda, Gampaha', 'Point Pedro, Jaffna', 'Puttalam, Puttalam']
  }, {
    letter: 'R',
    names: ['Ratnapura, Ratnapura', 'Rajagiriya, Colombo']
  }, {
    letter: 'S',
    names: ['Sri Jayawardenapura Kotte, Colombo']
  }, {
    letter: 'T',
    names: ['Tangalle, Hambantota', 'Trincomalee, Trincomalee']
  }, {
    letter: 'V',
    names: ['Valvettithurai, Jaffna', 'Vavuniya, Vavuniya']
  }, {
    letter: 'W',
    names: ['Wattala, Gampaha', 'Wattegama, Monaragala', 'Wellawatte, Colombo', 'Weligama, Matara']
  }];


  industries: IndustryGroup[] = [{
    letter: 'A',
    names: ['Accommodation', 'Accommodation and Food Services', 'Administrative and Support Services',
      'Administrative and Support and Waste Management and Remediation Services', 'Agriculture, Forestry, Fishing and Hunting',
      'Air Transportation', 'Ambulatory Health Care Services', 'Amusement, Gambling, and Recreation Industries', 'Animal Production',
      'Apparel Manufacturing', 'Arts, Entertaining, and Recreation'],
  }, {
    letter: 'B',
    names: ['Beverage and Tobacco Product Manufacturing', 'Broadcasting', 'Building Material and Garden Equipment and Supplies Dealers']
  }, {
    letter: 'C',
    names: ['Chemical Manufacturing', 'Clothing', 'Computer and Electronic Product Manufacturing', 'Construction', 'Couriers and Messengers'
    , 'Credit Intermediation', 'Crop Production']
  }, {
    letter: 'D',
    names: ['Data Processing, and Hosting']
  }, {
    letter: 'E',
    names: ['Education and Health Services', 'Educational Services', 'Electrical Equipment, Appliance, and Component Manufacturing',
      'Electronics and Appliance Stores']
  }, {
    letter: 'F',
    names: ['Fabricated Metal Product Manufacturing', 'Finance and Insurance', 'Financial Activities', 'Fishing, Hunting and Trapping',
      'Food Manufacturing', 'Food Services', 'Food and Beverage Stores', 'Forestry and Logging', 'Funds, Trusts, and Other Financial ' +
      'Vehicles', 'Furniture and Home Furnishings Stores', 'Furniture and Related Product Manufacturing']
  }, {
    letter: 'G',
    names: ['Gasoline Stations', 'General Merchandise Stores', 'Goods-Producing Industries']
  }, {
    letter: 'H',
    names: ['Health Care and Social Assistance', 'Health and Personal Care Stores', 'Heavy and Civil Engineering Constrction', 'Hospitals']
  }, {
    letter: 'I',
    names: ['Information', 'Insurance Carriers and Related Activities', 'Internet Publishing and Broadcasting']
  }, {
    letter: 'L',
    names: ['Leisure and Hospitality']
  }, {
    letter: 'M',
    names: ['Machinery Manufacturing', 'Manufacturing', 'Merchant Wholesalers', 'Mining', 'Monetary Authorities',
      'Motion Picture and Sound Recording Industries', 'Motor Vehicles and Parts Dealers', 'Museums, Historical Sites']
  }, {
    letter: 'N',
    names: ['Natural Resources and Mining', 'Nonstore Retailers', 'Nursing and Residential Care Facilities']
  }, {
    letter: 'O',
    names: ['Oil and Gas Extraction']
  }, {
    letter: 'P',
    names: ['Paper Manufacturing', 'Postal Service', 'Publishing Industries', 'Professional and Business Services']
  }, {
    letter: 'R',
    names: ['Real Estate', 'Rental and Leasing', 'Repair and Maintenance', 'Retail Trade']
  }, {
    letter: 'S',
    names: ['Scenic and Sightseeing Transportation', 'Service-Providing Industries', 'Social Assitance',
      'Sporting Goods, Hooby, Book, and Music Stores', 'Support Activites for Agriculture', 'Support Activites for Mining',
      'Support Activities for Transportation']
  }, {
    letter: 'T',
    names: ['Telecommunications', 'Textille Mills', 'Textile Product Mills', 'Trade, Transportation, and Utilities',
      'Transit and Ground Passenger Transportation', 'Transportation Equipment Manufacturing', 'Transportation and Warehousing',
      'Truck Trabsportation']
  }, {
    letter: 'W',
    names: ['Warehousing and Storage', 'Waste Management and Remediation Service', 'Water Tranportation',
      'Wholesale Electronic Markets and Agents and Brokers', 'Wholesale Trade', 'Warehousing and Storage', 'Wood Product Manufacturing']
  }];

  locationOptions: Observable<LocationGroup[]>;
  industryOptions: Observable<IndustryGroup[]>;

  chosenYearStartHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateStart.value;
    ctrlValue.year(normalizedYear.year());
    this.dateStart.setValue(ctrlValue);
  }

  chosenMonthStartHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateStart.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateStart.setValue(ctrlValue);
    datepicker.close();
  }

  chosenYearEndHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateEnd.value;
    ctrlValue.year(normalizedYear.year());
    this.dateEnd.setValue(ctrlValue);
  }

  chosenMonthEndHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateEnd.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateEnd.setValue(ctrlValue);
    datepicker.close();
  }
  // navigate() {
  // }
  invalidProductName() {
    return (this.submitted && this.detailsForm.controls.productName.errors != null);
  }
  invalidIndustry() {
    return (this.submitted && this.detailsForm.controls.industry.errors != null);
  }
  invalidAudience() {
    return (this.submitted && this.detailsForm.controls.audience.errors != null);
  }
  invalidBudget() {
    return (this.submitted && this.detailsForm.controls.budget.errors != null);
  }
  invalidLocation() {
    return (this.submitted && this.detailsForm.controls.location.errors != null);
  }
  invalidPrice() {
    return (this.submitted && this.detailsForm.controls.price.errors != null);
  }
  // invalidStartDate() {
  //   return (this.submitted && this.detailsForm.controls.startDate.errors != null);
  // }
  // invalidEndDate() {
  //   return (this.submitted && this.detailsForm.controls.endDate.errors != null);
  // }
  onSubmit() {
    this.submitted = true;
    if (this.detailsForm.invalid === true) {
      return;
    } else {
      // tslint:disable-next-line:only-arrow-functions
      this.router.navigate(['/campaign']);
      this.detailsForm.reset(this.detailsForm.value);
      this.registered = true;
    }
  }
  ngOnInit() {
    // // tslint:disable-next-line:only-arrow-functions
    // $('document').ready(function() {
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('#enterDetails').submit(function(event) {
    //     // onSubmit();
    //     event.preventDefault();
    //   });
    // });
    // this.detailsForm = this.formBuilder.group({
    //   productName: ['', [Validators.required]],
    //   industry: ['', [Validators.required]],
    //   audience: ['', [Validators.required]],
    //   budget: ['', [Validators.required]],
    //   location: ['', [Validators.required]],
    //   price: ['', [Validators.required]],
    //   duration: ['', [Validators.required]],
    // });
    // tslint:disable-next-line:no-non-null-assertion
    this.locationOptions = this.detailsForm.get('location')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroupLocation(value))
      );
    // tslint:disable-next-line:no-non-null-assertion
    this.industryOptions = this.detailsForm.get('industry')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroupIndustry(value))
      );
  }
  private _filterGroupLocation(value: string): LocationGroup[] {
    if (value) {
      return this.locations
        .map(group => ({letter: group.letter, names: filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.locations;
  }

  private _filterGroupIndustry(value: string): IndustryGroup[] {
    if (value) {
      return this.industries
        .map(group => ({letter: group.letter, names: filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.industries;
  }

}

