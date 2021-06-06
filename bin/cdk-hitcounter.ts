#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkHitcounterStack } from '../lib/cdk-hitcounter-stack';

const app = new cdk.App();
new CdkHitcounterStack(app, 'CdkHitcounterStack');
