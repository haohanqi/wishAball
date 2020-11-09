import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistReducer, persistStore,createMigrate } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';


export default ({ element }) => {
	const migrations ={
		1:(state)=>{
			return {
				search:{
					cityFilter: {
						"North York": '',
						"Toronto": '',
						"Markhum": '',
						"Scarborough": '',
						"Vaughan": '',
						"Richmond Hill": '',
						"Newmarket": '',
						"Mississauga": '',
						"Aurora": '',
						"Georgina": '',
					},
					sportFilter: {
						"Basketball": '',
						"Volleyball": '',
						"Soccer": '',
						"Football": ''
					}
				}
	
			}
		}
	}

	const persistConfig = {
		key: 'root',
		version:1,
		storage,
		//stateReconciler: autoMergeLevel2,  
		migrate: createMigrate(migrations,{debug:false})
	};

	//const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = createStore(rootReducer
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	//const persistor = persistStore(store);

	return (
		<Provider store={store}>
			
				{element}
	
		</Provider>);
}
//<PersistGate loading={null} persistor={persistor}></PersistGate>