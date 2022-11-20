"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hook = void 0;
/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const core_1 = require("@oclif/core");
// eslint-disable-next-line @typescript-eslint/require-await
const hook = async function (opts) {
    if (opts.config.root.includes('sfdx')) {
        core_1.CliUx.ux.warn('Running "sf update" has no effect because you\'re using a version of sf that was installed by sfdx. To update sf, run "sfdx update".');
    }
};
exports.hook = hook;
//# sourceMappingURL=preupdate.js.map