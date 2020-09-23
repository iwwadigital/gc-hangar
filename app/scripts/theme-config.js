var THEME_CONFIG = function() {
	return {
		// Configuracao do app
		empreendimentoId: 13,

		// Configuracao dos plugins
		oneSignal: {
			enable: true,
			appId: 'fac4c33f-86ea-4164-a95c-df2e84580b4e',
			options: {
				googleProjectNumber: '609392078926' // Required for Android
			}
		},

		adMob: {
			enable: true,
			adSize: 'SMART_BANNER',
			offsetTopBar: false, // workaround to previne overlapping for the statusbar
			bgColor: '#ffffff',
			isTesting: true,
			autoShow: true,
			Android: {
				banner: 'ca-app-pub-1111111111111111/1111111111',
				interstitial: 'ca-app-pub-1111111111111111/1111111111'
			},
			IOS: {
				banner: 'ca-app-pub-1111111111111111/1111111111',
				interstitial: 'ca-app-pub-1111111111111111/1111111111'
			}
		},

		googleAnalytics: {
			trackerID: 'UA-84889545-1'
		}
	}
}();
