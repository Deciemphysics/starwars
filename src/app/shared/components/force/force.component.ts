import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";


@Component({
    selector: 'force',
    templateUrl: './force.component.html',
    styleUrls: ['./force.component.css']
})
export class ForceComponent implements OnChanges {
    @Input() forceStrength: number;
    @Input() iconSize: string;
    @Output() forceStrengthClicked: EventEmitter<string> = new EventEmitter<string>();
    forceIconsWidth: number;

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.forceIconsWidth = this.forceStrength * 13;

        console.log('iconSize', this.iconSize);
    }

    onClick($event): void {
        console.log($event);
        let newVal = ($event.clientX - 75) / 12;
        console.log(newVal);
        this.forceStrengthClicked.emit(`The field ${this.forceStrength} was clicked!`);
    }
}
