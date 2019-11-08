import { EthMementoPluginConfig } from "app/eth-memento/EthMementoPluginConfig";
import { ILogger } from "plugin-api";
import { BlockDetailsStoreFactory } from "app/shared/data/block/details/BlockDetailsStoreFactory";
import { MementoDataSource } from "app/eth-memento/MementoDataSource";
import { TxLiteByAccountStoreFactory } from "app/eth-memento/data/tx/byAccount/TxLiteByAccountStoreFactory";
import { BlockValueStoreFactory } from "app/shared/data/block/value/BlockValueStoreFactory";
import { TxDetailsStoreFactory } from "app/eth-memento/data/tx/details/TxDetailsStoreFactory";
import { LogEventsStoreFactory } from "app/eth-memento/data/logEvents/LogEventsStoreFactory";
import { UncleDetailsStoreFactory } from "app/shared/data/uncle/UncleDetailsStoreFactory";

export class MementoDataSourceFactory {
    create(config: EthMementoPluginConfig, logger: ILogger) {
        let blockDetailsStore = new BlockDetailsStoreFactory(config).create();
        let blockValueStore = new BlockValueStoreFactory(config).create();
        let txByAccountStore = new TxLiteByAccountStoreFactory(config).create();
        let txDetailsStore = new TxDetailsStoreFactory(config).create();
        let logEventsStore = new LogEventsStoreFactory(config).create();
        let uncleDetailsStore = new UncleDetailsStoreFactory(config).create();

        let mementoDataSource = new MementoDataSource(
            {
                blockDetailsStore,
                blockValueStore,
                txDetailsStore,
                txByAccountStore,
                logEventsStore,
                uncleDetailsStore
            }
        );

        return mementoDataSource;
    }
}