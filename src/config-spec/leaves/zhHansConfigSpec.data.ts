import { parse } from 'yaml'
import * as fs from "fs";

// noinspection JSUnusedGlobalSymbols
export default {
    load() {
        return parse(fs.readFileSync('./docs/config-spec/leaves/zh_Hans.yml', 'utf-8'))
    }
}