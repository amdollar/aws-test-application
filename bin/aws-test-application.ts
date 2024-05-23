#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsTestApplicationStack } from '../lib/aws-test-application-stack';

const app = new cdk.App();
new AwsTestApplicationStack(app, 'AwsTestApplicationStack', {

});