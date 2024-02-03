import { parse } from 'yaml'
import * as fs from "fs";

// noinspection JSUnusedGlobalSymbols
export default {
    load() {
        return parse(fs.readFileSync('./docs/config-spec/leaves/en_US.yml', 'utf-8'))
    }
}