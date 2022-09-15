export default function ejectDatesFromStr(content: string):string[]{
    return content.split(' ')
    .filter((str: string) => str.match(
        '^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$',
      ),
    );
} 