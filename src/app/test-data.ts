import { InMemoryDbService } from "angular-in-memory-web-api";

export class TestData implements InMemoryDbService {
    createDb(){
        let productDetails = [
                { id: '1', title: 'Fish', category: 'Frozen'}, 
                 { id: '2', title: 'Sliced Bread', category: 'Bakery'}, 
                  { id: '3', title: 'Mango', category: 'Fruit VEG'}, 
        ];

        return { products: productDetails};
    }
}
