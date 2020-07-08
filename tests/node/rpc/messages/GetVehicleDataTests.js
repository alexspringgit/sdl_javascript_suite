const SDL = require('./../../../../lib/js/dist/SDL.min.js');
const GetVehicleData = SDL.rpc.messages.GetVehicleData;
const FunctionID = SDL.rpc.enums.FunctionID;
const MessageType = SDL.rpc.enums.MessageType;

const BaseRpcTests = require('./BaseRpcTests');
const Test = require('./../../../Test.js');
const Validator = require('./../../../Validator.js');

describe('GetVehicleDataTests', function () {
    before(function () {
        this.createMessage = function () {
            return new GetVehicleData()
                .setGearStatus(Test.GENERAL_BOOLEAN)
                .setPrndl(Test.GENERAL_BOOLEAN);
        };

        this.getExpectedParameters = function (sdlVersion) {
            return {
                [GetVehicleData.KEY_GEAR_STATUS]: Test.GENERAL_BOOLEAN,
                [GetVehicleData.KEY_PRNDL]: Test.GENERAL_BOOLEAN,
            };
        };

        this.getMessageType = function () {
            return MessageType.request;
        };

        this.getFunctionId = function () {
            return FunctionID.keyForValue(FunctionID.GetVehicleData);
        };
    });

    BaseRpcTests.tests();

    it ('testRpcValues', function (done) {
        let rpcMessage = this.msg;
        // Test Values
        const testGearStatus = rpcMessage.getGearStatus();
        const testPrndl = rpcMessage.getPrndl();

        // Valid Tests
        Validator.assertEquals(Test.GENERAL_BOOLEAN, testGearStatus);
        Validator.assertEquals(Test.GENERAL_BOOLEAN, testPrndl);

        // Invalid/Null Tests
        rpcMessage = new GetVehicleData();
        Validator.assertNotNull(rpcMessage);
        Validator.testNullBase(FunctionID.keyForValue(FunctionID.GetVehicleData),
            MessageType.request,
            rpcMessage);

        Validator.assertNullOrUndefined(rpcMessage.getGearStatus());
        Validator.assertNullOrUndefined(rpcMessage.getPrndl());

        done();
    });
});