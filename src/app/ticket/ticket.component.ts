import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

export class Itenerary {
  departure: string;
  destination: string;
  dateOfTravel: Date;
  numTravelers: number;
  ticketPrice: number;
}


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  travelForm: FormGroup;

  ngOnInit(): void {
    this.travelForm = new FormGroup({
      departure: new FormControl(this.itenerary.departure, [Validators.required]),
      destination: new FormControl(this.itenerary.destination, [Validators.required]),
      dateOfTravel: new FormControl(this.itenerary.dateOfTravel,[Validators.required]),
      numTravelers: new FormControl(this.itenerary.numTravelers,[Validators.required, Validators.min(1), Validators.max(99)]),
      ticketPrice: new FormControl(this.ticketPrice)
    });
  }

  get departure() { return this.travelForm.get('departure'); }
  get destination() { return this.travelForm.get('destination'); }
  get dateOfTravel() { return this.travelForm.get('dateOfTravel'); }
  get numTravelers() { return this.travelForm.get('numTravelers'); }
  get ticketPrice() { return Math.abs(150*this.itenerary.numTravelers); }

  itenerary = new Itenerary();

  Airport: string[] = [
    'ATL',
    'LAX',
    'ORD',
    'DFW',
    'DEN',
    'JFK',
    'SFO',
    'SEA',
    'LAS',
    'MCO',
    'EWR',
    'CLT',
    'PHX',
    'IAH',
    'MIA',
    'BOS',
    'MSP',
    'FLL',
    'DTW',
    'PHL',
    'LGA',
    'BWI',
    'SLC',
    'SAN',
    'IAD',
    'DCA',
    'MDW',
    'TPA',
    'PDX',
    'HNL'
    ];

    //public numTravelers:number;
    public displayTravel:string;

  onSubmit(): void {
    //if(this.itenerary.numTravelers<1) this.itenerary.numTravelers =1;
    console.log(this.itenerary);
    //this.displayTravel = "Total Ticket price for "+ Math.abs(this.itenerary.numTravelers) + " travelers: $"+this.ticketPrice
    //this.displayTravel = "Total Ticket price for "+  Math.abs(this.itenerary.numTravelers) + " travelers: $"+this.ticketPrice + " FROM: "+this.itenerary.departure+" TO: "+this.itenerary.destination+" ON: "+this.itenerary.dateOfTravel;
    this.displayTravel = "Departing on: "+this.itenerary.dateOfTravel+",\tDeparting from: "+this.itenerary.departure+",\tArriving to: "+this.itenerary.destination+",\tNumber of Travelers: "+Math.abs(this.itenerary.numTravelers)+",\tTotal Price: $"+this.ticketPrice;
  }
}
