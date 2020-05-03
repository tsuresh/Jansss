// Import statements
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AuthorizationService} from '../../service/authorization.service';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';

// Export statements
export interface LocationGroup {
  letter: string;
  names: string[];
}

export interface AudienceGroup {names: string; }

export interface IndustryGroup {
  letter: string;
  names: string[];
}

export const filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-enter-details-form',
  templateUrl: './enter-details-form.component.html',
  styleUrls: ['./enter-details-form.component.scss',
    '../../../../node_modules/animate.css/animate.min.css'
  ],
  providers: [AuthorizationService]
})

export class EnterDetailsFormComponent implements OnInit {
  loading = false;
  detailsForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthorizationService, private snackBar: MatSnackBar) {
    this.detailsForm = this.createDetailsForm();
  }
  // list of Locations
   locations: LocationGroup[] = [{
    letter: 'A',
    names: [
      'Ambalangoda, Galle',
      'Ampara, Ampara',
      'Anuradhapura, Anuradhapura'
    ]
  }, {
    letter: 'B',
    names: [
      'Badulla, Badulla',
      'Balangoda, Ratnapura',
      'Bambalapitiya, Colombo',
      'Bandarawela, Badulla',
      'Battaramulla, Colombo',
      'Batticaloa, Batticaloa',
      'Beruwala, Kalutara'
    ]
  }, {
    letter: 'C',
    names: [
      'Chavakachcheri, Jaffna',
      'Chillaw, Puttalam']
  }, {
    letter: 'D',
    names: [
      'Dambulla, Matale',
      'Dehiwela-Mount Lavinia, Colombo'
    ]
  }, {
    letter: 'E',
    names: ['Eravur, Batticaloa']
  }, {
    letter: 'F',
    names: ['Fort, Colombo']
  }, {
    letter: 'G',
    names: [
      'Galle, Galle',
      'Gampaha, Gampaha',
      'Gampola, Kandy'
    ]
  }, {
    letter: 'H',
    names: [
      'Hambantota, Hambantota',
      'Haputale, Badulla',
      'Hatton, Nuwara Eliya',
      'Horana, Kalutara'
    ]
  }, {
    letter: 'J',
    names: [
      'Ja-Ela, Gampaha',
      'Jaffna, Jaffna'
    ]
  }, {
    letter: 'K',
    names: [
      'Kadawatha, Colombo',
      'Kalmunai, Ampara',
      'Kalutara, Kalutara',
      'Kandy, Kandy',
      'Kattankudy, Batticaloa',
      'Katunayake, Gampaha',
      'Kegalle, Kegalle',
      'Kelaniya, Gampaha',
      'Kolonnawa, Colombo',
      'Kollupitiya, Colombo',
      'Kohuwala, Colombo',
      'Kottawa, Colombo',
      'Kuliyapitiya, Kurunegala',
      'Kurunegala, Kurunegala'
    ]
  }, {
    letter: 'M',
    names: [
      'Maharagama, Colombo',
      'Mannar, Mannar',
      'Matale, Matale',
      'Matara, Matara',
      'Minuwangoda, Gampaha',
      'Monaragala, Monaragala',
      'Moratuwa, Colombo'
    ]
  }, {
    letter: 'N',
    names: [
      'Nawala, Colombo',
      'Nawalapitiya, Kandy',
      'Negombo, Gampaha',
      'Nugegoda, Colombo',
      'Nuwara Eliya, Nuwara Eliya'
    ]
  }, {
    letter: 'P',
    names: [
      'Panadura, Kalutara',
      'Peliyagoda, Gampaha',
      'Point Pedro, Jaffna',
      'Puttalam, Puttalam'
    ]
  }, {
    letter: 'R',
    names: [
      'Ratnapura, Ratnapura',
      'Rajagiriya, Colombo'
    ]
  }, {
    letter: 'S',
    names: ['Sri Jayawardenapura Kotte, Colombo']
  }, {
    letter: 'T',
    names: [
      'Tangalle, Hambantota',
      'Trincomalee, Trincomalee'
    ]
  }, {
    letter: 'V',
    names: [
      'Valvettithurai, Jaffna',
      'Vavuniya, Vavuniya'
    ]
  }, {
    letter: 'W',
    names: [
      'Wattala, Gampaha',
      'Wattegama, Monaragala',
      'Wellawatte, Colombo',
      'Weligama, Matara'
    ]
  }];

  // List of Industries
  industries: IndustryGroup[] = [{
    letter: 'A',
    names: [
      'Accommodation',
      'Accommodation and Food Services',
      'Administrative and Support Services',
      'Administrative and Support and Waste Management and Remediation Services',
      'Agriculture, Forestry, Fishing and Hunting',
      'Air Transportation',
      'Ambulatory Health Care Services',
      'Amusement, Gambling, and Recreation Industries',
      'Animal Production',
      'Apparel Manufacturing',
      'Arts, Entertaining, and Recreation'],
  }, {
    letter: 'B',
    names: [
      'Beverage and Tobacco Product Manufacturing',
      'Broadcasting',
      'Building Material and Garden Equipment and Supplies Dealers']
  }, {
    letter: 'C',
    names: [
      'Chemical Manufacturing',
      'Clothing',
      'Computer and Electronic Product Manufacturing',
      'Construction',
      'Couriers and Messengers',
      'Credit Intermediation',
      'Crop Production'
    ]
  }, {
    letter: 'D',
    names: ['Data Processing, and Hosting']
  }, {
    letter: 'E',
    names: [
      'Education and Health Services',
      'Educational Services',
      'Electrical Equipment, Appliance, and Component Manufacturing',
      'Electronics and Appliance Stores'
    ]
  }, {
    letter: 'F',
    names: [
      'Fabricated Metal Product Manufacturing',
      'Finance and Insurance',
      'Financial Activities',
      'Fishing, Hunting and Trapping',
      'Food Manufacturing',
      'Food Services',
      'Food and Beverage Stores',
      'Forestry and Logging',
      'Funds, Trusts, and Other Financial Vehicles',
      'Furniture and Home Furnishings Stores',
      'Furniture and Related Product Manufacturing'
    ]
  }, {
    letter: 'G',
    names: [
      'Gasoline Stations',
      'General Merchandise Stores',
      'Goods-Producing Industries'
    ]
  }, {
    letter: 'H',
    names: [
      'Health Care and Social Assistance',
      'Health and Personal Care Stores',
      'Heavy and Civil Engineering Constrction',
      'Hospitals'
    ]
  }, {
    letter: 'I',
    names: [
      'Information',
      'Insurance Carriers and Related Activities',
      'Internet Publishing and Broadcasting'
    ]
  }, {
    letter: 'L',
    names: ['Leisure and Hospitality']
  }, {
    letter: 'M',
    names: [
      'Machinery Manufacturing',
      'Manufacturing',
      'Merchant Wholesalers',
      'Mining',
      'Monetary Authorities',
      'Motion Picture and Sound Recording Industries',
      'Motor Vehicles and Parts Dealers',
      'Museums, Historical Sites'
    ]
  }, {
    letter: 'N',
    names: [
      'Natural Resources and Mining',
      'Nonstore Retailers',
      'Nursing and Residential Care Facilities'
    ]
  }, {
    letter: 'O',
    names: ['Oil and Gas Extraction']
  }, {
    letter: 'P',
    names: [
      'Paper Manufacturing',
      'Postal Service',
      'Publishing Industries',
      'Professional and Business Services'
    ]
  }, {
    letter: 'R',
    names: [
      'Real Estate',
      'Rental and Leasing',
      'Repair and Maintenance',
      'Retail Trade'
    ]
  }, {
    letter: 'S',
    names: [
      'Scenic and Sightseeing Transportation',
      'Service-Providing Industries',
      'Social Assitance',
      'Sporting Goods, Hooby, Book, and Music Stores',
      'Support Activites for Agriculture',
      'Support Activites for Mining',
      'Support Activities for Transportation'
    ]
  }, {
    letter: 'T',
    names: [
      'Telecommunications',
      'Textile Mills',
      'Textile Product Mills',
      'Trade, Transportation, and Utilities',
      'Transit and Ground Passenger Transportation',
      'Transportation Equipment Manufacturing',
      'Transportation and Warehousing',
      'Truck Transportation']
  }, {
    letter: 'W',
    names: [
      'Warehousing and Storage',
      'Waste Management and Remediation Service',
      'Water Transportation',
      'Wholesale Electronic Markets and Agents and Brokers',
      'Wholesale Trade',
      'Warehousing and Storage',
      'Wood Product Manufacturing'
    ]
  }];

  // Types of Audiences
  audiences: AudienceGroup[] = [
    {names: 'admin'},
    {names: 'blue-collar'},
    {names: 'entrepreneur'},
    {names: 'housemaid'},
    {names: 'management'},
    {names: 'retired'},
    {names: 'self-employed'},
    {names: 'services'},
    {names: 'student'},
    {names: 'technician'},
    {names: 'unemployed'},
    {names: 'unknown'},
  ];


  locationOptions: Observable<LocationGroup[]>;
  industryOptions: Observable<IndustryGroup[]>;
  audienceOptions: Observable<AudienceGroup[]>;

  createDetailsForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: [
          null,
          Validators.required
        ],
        pstype: [
          null,
          Validators.required
        ],
        industry: [
          null,
          Validators.required
        ],
        goal: [
          null,
          Validators.required
        ],
        audience: [
          null,
          Validators.required
        ],
        budget: [
          null,
          Validators.required
        ],
        location: [
          null,
          Validators.required
        ],
        price: [
          null,
          Validators.required
        ],
        description: [
          null,
          Validators.required]
      }
    );
  }

  onSubmit() {
    if (this.detailsForm.invalid === true) {
      return;
    } else {
      document.getElementById('spinner').style.display = 'inline-block';
      const data: any = Object.assign(this.detailsForm.value);
      data.audience = this.detailsForm.value.audience.names.toString();
      this.auth.sendCampaignDetails(data).subscribe((res) => {
        localStorage.setItem('campaign', JSON.stringify(res));
        this.loading = true;
        this.router.navigate(['/campaign']);
      }, error => {
        document.getElementById('spinner').style.display = 'none';
        this.snackBar.open('An error occurred', '', {duration: 3000});
      });
    }
  }

  ngOnInit() {
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
    this.audienceOptions = this.detailsForm.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.names),
        map(name => name ? this._filterGroupAudience(name) : this.audiences.slice())
      );
  }


  displayAudience(user: AudienceGroup): string {
    return user && user.names ? user.names : '';
  }
  // Autocomplete drop down list
  private _filterGroupAudience(names: string): AudienceGroup[] {
    const filterValue = names.toLowerCase();

    return this.audiences.filter(option => option.names.toLowerCase().indexOf(filterValue) === 0);
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

