import { htmlCommentPattern, htmlTagPattern, ukrainePostCodePattern, urlPattern } from "../regex-patterns";

export class CommonValidator {

    public isUkrainianPostCodeValid(postcode: string): boolean {
        if (!postcode) return false;
        return new RegExp(ukrainePostCodePattern).test(postcode);
    }

    public isUrlValid(postcode: string): boolean {
        if (!postcode) return false;
        return new RegExp(urlPattern).test(postcode);
    }

    public getHTMLComments(postcode: string): string[] {
        if (!postcode) return [];
        return this.getRegexResult(postcode.matchAll(htmlCommentPattern));
    }

    public getHTMLTags(postcode: string): string[] {
        if (!postcode) return [];
        return this.getRegexResult(postcode.matchAll(htmlTagPattern));
    }

    private getRegexResult(regResult: IterableIterator<RegExpMatchArray>): string[] {
        return Array.from(regResult).map(match => match[0]);
    }
}
