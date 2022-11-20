"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const core_1 = require("@salesforce/core");
class Env extends core_1.EnvVars {
    constructor(env = process.env) {
        super(env);
    }
    isAutoupdateDisabled() {
        return this.getBoolean(Env.SF_AUTOUPDATE_DISABLE) || this.getBoolean(Env.SF_DISABLE_AUTOUPDATE);
    }
    isAutoupdateDisabledSet() {
        return !!this.getString(Env.SF_AUTOUPDATE_DISABLE) || !!this.getString(Env.SF_DISABLE_AUTOUPDATE);
    }
    setAutoupdateDisabled(value, updateInstructions) {
        this.setBoolean(Env.SF_AUTOUPDATE_DISABLE, value);
        this.setBoolean(Env.SF_DISABLE_AUTOUPDATE, value);
        if (updateInstructions) {
            this.setUpdateInstructions(updateInstructions);
        }
    }
    setUpdateInstructions(value) {
        this.setString(Env.SF_UPDATE_INSTRUCTIONS, value);
    }
    isDemoMode() {
        return (this.getString(Env.SF_ENV, 'production') || '').toLowerCase() === 'demo';
    }
    isInstaller() {
        // Check SFDX_INSTALLER instead of SF_INSTALLER until such time sf has its own installers
        return this.getBoolean(Env.SFDX_INSTALLER);
    }
    getS3HostOverride() {
        return this.getString(Env.SF_S3_HOST);
    }
    setS3HostOverride(value) {
        return this.setString(Env.SF_S3_HOST, value);
    }
    getNpmRegistryOverride() {
        return this.getString(Env.SF_NPM_REGISTRY);
    }
    setNpmRegistryOverride(value) {
        return this.setString(Env.SF_NPM_REGISTRY, value);
    }
    isLazyRequireEnabled() {
        return this.getBoolean(Env.SF_LAZY_LOAD_MODULES);
    }
    normalizeAutoupdateDisabled() {
        // Ensure that the legacy envar always causes the oclif counterpart to be set
        // see https://github.com/oclif/plugin-update/blob/3946fb296a0a95544ab6364b36a1f7422c8aeddf/src/hooks/init.ts#L22
        if (this.getBoolean(Env.SF_AUTOUPDATE_DISABLE)) {
            this.setBoolean(Env.SF_DISABLE_AUTOUPDATE, true);
        }
        else if (this.getBoolean(Env.SF_DISABLE_AUTOUPDATE)) {
            this.setBoolean(Env.SF_AUTOUPDATE_DISABLE, true);
        }
    }
}
exports.Env = Env;
Env.SF_AUTOUPDATE_DISABLE = 'SF_AUTOUPDATE_DISABLE';
Env.SF_DISABLE_AUTOUPDATE = 'SF_DISABLE_AUTOUPDATE';
Env.SF_ENV = 'SF_ENV';
Env.SF_INSTALLER = 'SF_INSTALLER';
Env.SFDX_INSTALLER = 'SFDX_INSTALLER';
Env.SF_LAZY_LOAD_MODULES = 'SF_LAZY_LOAD_MODULES';
Env.SF_NPM_REGISTRY = 'SF_NPM_REGISTRY';
Env.SF_S3_HOST = 'SF_S3_HOST';
Env.SF_UPDATE_INSTRUCTIONS = 'SF_UPDATE_INSTRUCTIONS';
exports.default = new Env();
//# sourceMappingURL=env.js.map