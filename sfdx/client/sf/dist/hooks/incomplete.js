"use strict";
/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const sf_plugins_core_1 = require("@salesforce/sf-plugins-core");
async function determineCommand(config, matches) {
    if (matches.length === 1)
        return matches[0].id;
    const prompter = new sf_plugins_core_1.Prompter();
    const { command } = await prompter.timedPrompt([
        {
            name: 'command',
            type: 'list',
            message: 'Which of these commands do you mean',
            choices: matches.map((p) => (0, core_1.toConfiguredId)(p.id, config)),
        },
    ]);
    return command;
}
const hook = async function ({ config, matches, argv }) {
    const command = await determineCommand(config, matches);
    if (argv.includes('--help') || argv.includes('-h')) {
        return config.runCommand('help', [(0, core_1.toStandardizedId)(command, config)]);
    }
    return config.runCommand((0, core_1.toStandardizedId)(command, config), argv);
};
exports.default = hook;
//# sourceMappingURL=incomplete.js.map