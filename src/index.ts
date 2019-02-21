export class Foo {
    public bar(
        param1: string = 'PARAM1',
        param2: string = 'PARAM2',
        param3: string = 'PARAM3',
        param4: string = 'PARAM4',
    ) {
        return `${param1} - ${param2} - ${param3} - ${param4}`;
    }
}
