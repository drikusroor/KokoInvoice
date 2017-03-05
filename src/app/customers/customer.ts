import {Address} from './address';
import {GuidService} from './shared/guid.service';

export class Customer {
    guidService: GuidService;

    id: AAGUID;
    name: string;
    description: string;
    customerNumber: string;
    logo: string;

    address: Address;

    constructor(name)
    {
        this.guidService = new GuidService();
        this.id = this.guidService.generateGuid();
        this.name = name;
    }
}
