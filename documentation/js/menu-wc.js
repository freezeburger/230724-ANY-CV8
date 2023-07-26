'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">230734-any-cv8 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-d0c07e493114827ce43077304dc53f9dc1c8e715a4924d4b73a5576dd39a6d8f2df8b7e103135a1a7002b9356c21075e2f2f9c0d717164636747e5d97725e9b6"' : 'data-bs-target="#xs-components-links-module-AppModule-d0c07e493114827ce43077304dc53f9dc1c8e715a4924d4b73a5576dd39a6d8f2df8b7e103135a1a7002b9356c21075e2f2f9c0d717164636747e5d97725e9b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d0c07e493114827ce43077304dc53f9dc1c8e715a4924d4b73a5576dd39a6d8f2df8b7e103135a1a7002b9356c21075e2f2f9c0d717164636747e5d97725e9b6"' :
                                            'id="xs-components-links-module-AppModule-d0c07e493114827ce43077304dc53f9dc1c8e715a4924d4b73a5576dd39a6d8f2df8b7e103135a1a7002b9356c21075e2f2f9c0d717164636747e5d97725e9b6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BsImportModule.html" data-type="entity-link" >BsImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CeImportModule.html" data-type="entity-link" >CeImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-028a4a890a6c801038c95dead1bb74f08c6a1aa4cdd8384955f34162ca6372af0af3a05966043da04f7d940071f7fce68364fb8d919f98759401fc0b1b1a9656"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-028a4a890a6c801038c95dead1bb74f08c6a1aa4cdd8384955f34162ca6372af0af3a05966043da04f7d940071f7fce68364fb8d919f98759401fc0b1b1a9656"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-028a4a890a6c801038c95dead1bb74f08c6a1aa4cdd8384955f34162ca6372af0af3a05966043da04f7d940071f7fce68364fb8d919f98759401fc0b1b1a9656"' :
                                        'id="xs-injectables-links-module-CoreModule-028a4a890a6c801038c95dead1bb74f08c6a1aa4cdd8384955f34162ca6372af0af3a05966043da04f7d940071f7fce68364fb8d919f98759401fc0b1b1a9656"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsModule.html" data-type="entity-link" >LayoutsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NgImportModule.html" data-type="entity-link" >NgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' : 'data-bs-target="#xs-components-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' :
                                            'id="xs-components-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' }>
                                            <li class="link">
                                                <a href="components/ProductCreationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCreationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductViewCreationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductViewCreationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductViewDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductViewDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductViewListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductViewListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' : 'data-bs-target="#xs-directives-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' :
                                        'id="xs-directives-links-module-ProductModule-a870a10930ae54691efb49fd9207a0b94421b7b09838aeb8bd2b71f9455dbe1bb92e9b389dcccdf279d85864698746672bd3792f2f933ab876ff72e88f0b5f78"' }>
                                        <li class="link">
                                            <a href="directives/ProductConsumerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductConsumerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShellModule.html" data-type="entity-link" >ShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ShellModule-712e47735081be85a55f9c94f68a5f84ba0ebcfcf744c21d157e291a784dbce832d13cafc864636a6bc8b0658c5d15681874cbeacd950ecec7d68d7ba19ce25a"' : 'data-bs-target="#xs-components-links-module-ShellModule-712e47735081be85a55f9c94f68a5f84ba0ebcfcf744c21d157e291a784dbce832d13cafc864636a6bc8b0658c5d15681874cbeacd950ecec7d68d7ba19ce25a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShellModule-712e47735081be85a55f9c94f68a5f84ba0ebcfcf744c21d157e291a784dbce832d13cafc864636a6bc8b0658c5d15681874cbeacd950ecec7d68d7ba19ce25a"' :
                                            'id="xs-components-links-module-ShellModule-712e47735081be85a55f9c94f68a5f84ba0ebcfcf744c21d157e291a784dbce832d13cafc864636a6bc8b0658c5d15681874cbeacd950ecec7d68d7ba19ce25a"' }>
                                            <li class="link">
                                                <a href="components/ShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShellRoutingModule.html" data-type="entity-link" >ShellRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewsModule-80a09b37b1cabd10bd5a816b407e2a2a7834e63bf17260a517af9873d81b7c48674c5717d600ce0373c9740c872afdbcbdcb44556c1954df380c0b833ced79e3"' : 'data-bs-target="#xs-components-links-module-ViewsModule-80a09b37b1cabd10bd5a816b407e2a2a7834e63bf17260a517af9873d81b7c48674c5717d600ce0373c9740c872afdbcbdcb44556c1954df380c0b833ced79e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-80a09b37b1cabd10bd5a816b407e2a2a7834e63bf17260a517af9873d81b7c48674c5717d600ce0373c9740c872afdbcbdcb44556c1954df380c0b833ced79e3"' :
                                            'id="xs-components-links-module-ViewsModule-80a09b37b1cabd10bd5a816b407e2a2a7834e63bf17260a517af9873d81b7c48674c5717d600ce0373c9740c872afdbcbdcb44556c1954df380c0b833ced79e3"' }>
                                            <li class="link">
                                                <a href="components/ViewLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProductCatalogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProductCatalogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ProductCreationFormComponent.html" data-type="entity-link" >ProductCreationFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDetailComponent.html" data-type="entity-link" >ProductDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductFilterComponent.html" data-type="entity-link" >ProductFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductListComponent.html" data-type="entity-link" >ProductListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductListItemComponent.html" data-type="entity-link" >ProductListItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductSearchComponent.html" data-type="entity-link" >ProductSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductViewCreationComponent.html" data-type="entity-link" >ProductViewCreationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductViewDetailComponent.html" data-type="entity-link" >ProductViewDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductViewListComponent.html" data-type="entity-link" >ProductViewListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewLoginComponent.html" data-type="entity-link" >ViewLoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewNotFoundComponent.html" data-type="entity-link" >ViewNotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewProductCatalogComponent.html" data-type="entity-link" >ViewProductCatalogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewProfileComponent.html" data-type="entity-link" >ViewProfileComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/ProductConsumerDirective.html" data-type="entity-link" >ProductConsumerDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Command.html" data-type="entity-link" >Command</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Commandable.html" data-type="entity-link" >Commandable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommandStatus.html" data-type="entity-link" >CommandStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSource.html" data-type="entity-link" >DataSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReactiveService.html" data-type="entity-link" >ReactiveService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});