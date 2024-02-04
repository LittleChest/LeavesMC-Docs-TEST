import { parse } from 'yaml'
import * as fs from "fs";

// noinspection JSUnusedGlobalSymbols
export default {
    load() {
        return parse(fs.readFileSync('./src/config-spec/leaves/zh_Hans.yml', 'utf-8'))
    }
}