<template>
  <div id="boxed">
    <!-- BEGIN #header -->

    <div id="search-overlay">
      <div id="search-overlay-inner">
        <form
          action="https://www.orange-themes.net/demo/bundy/blog.html"
          method="get"
        >
          <input type="text" value="" placeholder="Search something.." />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>

        <strong class="category-listing-title"
          ><span>Articles worth reading</span></strong
        >

        <div class="ot-content-block">
          <div
            class="ot-grid-article-list otg otg-items-3 otg-h-30 ot-blog-block"
          >
            <div class="otg-item">
              <div class="item-header">
                <span class="item-categories">
                  <a
                    href="blog.html"
                    style="background-color: #efed32; color: #444;"
                    ><i class="material-icons">star_border</i></a
                  >
                  <a href="blog.html" style="background-color: #005bac;"
                    ><i class="material-icons">whatshot</i></a
                  >
                </span>
                <a href="post.html" class="otgif-overlay" data-otgif-text="GIF"
                  ><img src="vue_auth/images/photos/image-15.jpg" alt=""
                /></a>
              </div>
              <div class="item-inner">
                <h2>
                  <a href="post.html"
                    >Wait, Whaaat? These 17 Paintings Cost Over 10 Million
                    Bucks</a
                  >
                </h2>
                <div class="item-meta">
                  <a href="blog.html" class="item-meta-i"
                    ><img src="vue_auth/images/no-avatar.jpg" alt="" />John
                    Doe</a
                  >
                  <span class="item-meta-i">5 hours ago</span>
                </div>
              </div>
            </div>

            <div class="otg-item">
              <div class="item-header">
                <span class="item-categories">
                  <a
                    href="blog.html"
                    style="background-color: #efed32; color: #444;"
                    ><i class="material-icons">star_border</i></a
                  >
                  <a href="blog.html" style="background-color: #005bac;"
                    ><i class="material-icons">whatshot</i></a
                  >
                </span>
                <a href="post.html" class="otgif-overlay" data-otgif-text="GIF"
                  ><img src="vue_auth/images/photos/image-16.jpg" alt=""
                /></a>
              </div>
              <div class="item-inner">
                <h2>
                  <a href="post.html"
                    >Wait, Whaaat? These 17 Paintings Cost Over 10 Million
                    Bucks</a
                  >
                </h2>
                <div class="item-meta">
                  <a href="blog.html" class="item-meta-i"
                    ><img src="vue_auth/images/no-avatar.jpg" alt="" />John
                    Doe</a
                  >
                  <span class="item-meta-i">5 hours ago</span>
                </div>
              </div>
            </div>

            <div class="otg-item">
              <div class="item-header">
                <span class="item-categories">
                  <a
                    href="blog.html"
                    style="background-color: #efed32; color: #444;"
                    ><i class="material-icons">star_border</i></a
                  >
                  <a href="blog.html" style="background-color: #005bac;"
                    ><i class="material-icons">whatshot</i></a
                  >
                </span>
                <a href="post.html" class="otgif-overlay" data-otgif-text="GIF"
                  ><img src="vue_auth/images/photos/image-17.jpg" alt=""
                /></a>
              </div>
              <div class="item-inner">
                <h2>
                  <a href="post.html"
                    >Wait, Whaaat? These 17 Paintings Cost Over 10 Million
                    Bucks</a
                  >
                </h2>
                <div class="item-meta">
                  <a href="blog.html" class="item-meta-i"
                    ><img src="vue_auth/images/no-avatar.jpg" alt="" />John
                    Doe</a
                  >
                  <span class="item-meta-i">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="login-overlay">
      <div id="login-overlay-inner">
        <div>
          <div class="login-overlay-explain-side">
            <h2>Welcome to <strong>Bundy</strong></h2>
            <strong>why should I bother ?</strong>
            <hr />
            <p>You will be granted a lot of features when signed in:</p>
            <ul>
              <li>Create new posts</li>
              <li>Ability to comment on anything</li>
              <li>Express your opinion on forums</li>
              <li>Become a community member</li>
            </ul>
            <a href="signup.html" class="login-explain-button"
              >Yes! Sign me up!</a
            >
          </div>

          <div class="login-overlay-form-side">
            <div class="ot-form-login">
              <div class="ot-login-w-social">
                <p>You can login using social media</p>
                <a href="#" class="ot-login-soc-facebook"
                  ><i class="fa fa-facebook"></i>Connect with Facebook</a
                >
                <a href="#" class="ot-login-soc-twitter"
                  ><i class="fa fa-twitter"></i>Connect with Twitter</a
                >
              </div>

              <div class="ot-split-hr"><span>OR</span></div>

              <p>
                <input
                  type="text"
                  autocomplete="off"
                  value=""
                  placeholder="Username"
                />
              </p>
              <p>
                <input
                  type="password"
                  autocomplete="off"
                  value=""
                  placeholder="Password"
                />
              </p>
              <p class="submit">
                <input type="submit" value="Member Login" class="button" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <span id="login-close-bnt">
        <a href="#" class="login-close-a"
          ><i class="material-icons">close</i>Close this window</a
        >
      </span>
    </div>

    <!-- BEGIN #content -->
    <main id="content">
      <!-- <div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<ul id="ot-breadcrumbs-list">
								<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="index.html" itemprop="url"><meta itemprop="title" content="Homepage"/>Homepage</a></li>
								<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="blog.html" itemprop="url"><meta itemprop="title" content="Blog"/>Blog</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<span>Some optional subtitle goes here...</span>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div>

				<div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<h1 class="entry-title">Page width sidebar</h1>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div> -->

      <!-- <div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<h1 class="entry-title">Page width sidebar</h1>
							<span>Some optional subtitle goes here...</span>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div> -->

      <!-- <div class="ot-breatcrumbs">
        <div class="container">
          <div class="aside-long-head">
            <a href="#"><img src="vue_auth/images/aside-2.png" alt=""/></a>
          </div>
        </div>
      </div> -->

      <!-- <div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<h1 class="entry-title">Page width sidebar</h1>
							<ul id="ot-breadcrumbs-list">
								<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="index.html" itemprop="url"><meta itemprop="title" content="Homepage"/>Homepage</a></li>
								<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="blog.html" itemprop="url"><meta itemprop="title" content="Blog"/>Blog</a></li>
							</ul>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div> -->

      <!-- <div class="ot-wide-container ot-wide-container-border" style="background-image: url(../images/bg-texture-grey.jpg);">
					<div class="container">

						<div class="ot-wide-container-inner">
							<p>asd</p>
						</div>

					</div>
				</div>

				<div class="ot-wide-container ot-wide-container-border ot-wide-container-dark">
  
					<video autoplay loop>
						<source type="video/mp4" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.mp4">
						<source type="video/webm" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.webm">
						<source type="video/ogg" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.ogv">
					</video>

					<div class="container">

						<div class="ot-wide-container-inner">
							<h1>Video block</h1>
							<p>asd</p>
						</div>

					</div>
				</div> -->

      <div class="ot-wide-container ot-wide-container-border">
        <div class="container">
          <div class="ot-wide-container-inner">
            <div class="otg ot-sidebar-block otg-h-40">
              <!-- BEGIN .ot-main-content -->
              <div class="otg-item otg-t-8 ot-main-content">
                <div class="ot-blog-block">
                  <div class="item">
                    <div class="item-vote">
                      <div class="theiaStickySidebar">
                        <div class="post-vote">
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons">keyboard_arrow_up</i></a
                          >
                          <span>
                            <strong>302</strong>
                            <span>vote score</span>
                          </span>
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons"
                              >keyboard_arrow_down</i
                            ></a
                          >
                        </div>
                        <a href="#" class="post-share-b"
                          ><i class="material-icons">share</i> Share</a
                        >
                      </div>
                    </div>
                    <div class="item-content">
                      <div class="theiaStickySidebar">
                        <div class="item-header">
                          <span class="item-categories">
                            <a
                              href="blog.html"
                              style="background-color: #efed32; color: #444;"
                              ><i class="material-icons">star_border</i></a
                            >
                            <a
                              href="blog.html"
                              style="background-color: #005bac;"
                              ><i class="material-icons">whatshot</i></a
                            >
                          </span>
                          <a
                            href="post.html"
                            class="otgif-overlay"
                            data-otgif-text="GIF"
                            ><img
                              src="vue_auth/images/photos/image-15.jpg"
                              alt=""
                          /></a>
                        </div>
                        <div class="item-inner">
                          <h2>
                            <a href="post.html"
                              >Wait, Whaaat? These 17 Paintings Cost Over 10
                              Million Bucks</a
                            >
                          </h2>
                          <div class="item-meta">
                            <a href="blog.html" class="item-meta-i"
                              ><img
                                src="vue_auth/images/no-avatar.jpg"
                                alt=""
                              />John Doe</a
                            >
                            <span class="item-meta-i">5 hours ago</span>
                            <a href="post.html" class="item-meta-i"
                              ><i class="material-icons">chat_bubble_outline</i
                              >30 comments</a
                            >
                            <span class="item-meta-i"
                              ><i class="material-icons">share</i>295
                              shares</span
                            >
                          </div>
                          <p>
                            Augue, dictum nec consectetur quis, elementum eu
                            arcu. Nunc ornare arcu lacus, quis aliquet odio
                            bibendum non. Nam vitae libero mauris. Suspendisse
                            vitae purus ligula. Morbi sed diam eget dolor
                            posuere convallis vel vel nisl. Nulla sagittis
                            efficitur ex, at sodales massa pulvinar a. Nunc quis
                            lacinia eros. Fusce acipsum gravida, tristique sed
                            felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="item-vote">
                      <div class="theiaStickySidebar">
                        <div class="post-vote">
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons">keyboard_arrow_up</i></a
                          >
                          <span>
                            <strong>302</strong>
                            <span>vote score</span>
                          </span>
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons"
                              >keyboard_arrow_down</i
                            ></a
                          >
                        </div>
                        <a href="#" class="post-share-b"
                          ><i class="material-icons">share</i> Share</a
                        >
                      </div>
                    </div>
                    <div class="item-content">
                      <div class="theiaStickySidebar">
                        <div class="item-header">
                          <span class="item-categories">
                            <a
                              href="blog.html"
                              style="background-color: #efed32; color: #444;"
                              ><i class="material-icons">star_border</i></a
                            >
                          </span>
                          <a
                            href="post.html"
                            class="otgif-overlay"
                            data-otgif-icon="play_arrow"
                            ><img
                              src="vue_auth/images/photos/image-16.jpg"
                              alt=""
                          /></a>
                        </div>
                        <div class="item-inner">
                          <h2>
                            <a href="post.html"
                              >Wait, Whaaat? These 17 Paintings Cost Over 10
                              Million Bucks</a
                            >
                          </h2>
                          <div class="item-meta">
                            <a href="blog.html" class="item-meta-i"
                              ><img
                                src="vue_auth/images/no-avatar.jpg"
                                alt=""
                              />John Doe</a
                            >
                            <span class="item-meta-i">5 hours ago</span>
                            <a href="post.html" class="item-meta-i"
                              ><i class="material-icons">chat_bubble_outline</i
                              >30 comments</a
                            >
                            <span class="item-meta-i"
                              ><i class="material-icons">share</i>295
                              shares</span
                            >
                          </div>
                          <p>
                            Augue, dictum nec consectetur quis, elementum eu
                            arcu. Nunc ornare arcu lacus, quis aliquet odio
                            bibendum non. Nam vitae libero mauris. Suspendisse
                            vitae purus ligula. Morbi sed diam eget dolor
                            posuere convallis vel vel nisl. Nulla sagittis
                            efficitur ex, at sodales massa pulvinar a. Nunc quis
                            lacinia eros. Fusce acipsum gravida, tristique sed
                            felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="item-vote">
                      <div class="theiaStickySidebar">
                        <div class="post-vote">
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons">keyboard_arrow_up</i></a
                          >
                          <span>
                            <strong>302</strong>
                            <span>vote score</span>
                          </span>
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons"
                              >keyboard_arrow_down</i
                            ></a
                          >
                        </div>
                        <a href="#" class="post-share-b"
                          ><i class="material-icons">share</i> Share</a
                        >
                      </div>
                    </div>
                    <div class="item-content">
                      <div class="theiaStickySidebar">
                        <div class="item-header">
                          <span class="item-categories">
                            <a
                              href="blog.html"
                              style="background-color: #005bac;"
                              ><i class="material-icons">whatshot</i></a
                            >
                          </span>
                          <a
                            href="post.html"
                            class="otgif-overlay"
                            data-otgif-liquid="View all 20 photos"
                            ><img
                              src="vue_auth/images/photos/image-17.jpg"
                              alt=""
                          /></a>
                        </div>
                        <div class="item-inner">
                          <h2>
                            <a href="post.html"
                              >Wait, Whaaat? These 17 Paintings Cost Over 10
                              Million Bucks</a
                            >
                          </h2>
                          <div class="item-meta">
                            <a href="blog.html" class="item-meta-i"
                              ><img
                                src="vue_auth/images/no-avatar.jpg"
                                alt=""
                              />John Doe</a
                            >
                            <span class="item-meta-i">5 hours ago</span>
                            <a href="post.html" class="item-meta-i"
                              ><i class="material-icons">chat_bubble_outline</i
                              >30 comments</a
                            >
                            <span class="item-meta-i"
                              ><i class="material-icons">share</i>295
                              shares</span
                            >
                          </div>
                          <p>
                            Augue, dictum nec consectetur quis, elementum eu
                            arcu. Nunc ornare arcu lacus, quis aliquet odio
                            bibendum non. Nam vitae libero mauris. Suspendisse
                            vitae purus ligula. Morbi sed diam eget dolor
                            posuere convallis vel vel nisl. Nulla sagittis
                            efficitur ex, at sodales massa pulvinar a. Nunc quis
                            lacinia eros. Fusce acipsum gravida, tristique sed
                            felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="item-vote">
                      <div class="theiaStickySidebar">
                        <div class="post-vote">
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons">keyboard_arrow_up</i></a
                          >
                          <span>
                            <strong>302</strong>
                            <span>vote score</span>
                          </span>
                          <a href="#" class="post-vote-button"
                            ><i class="material-icons"
                              >keyboard_arrow_down</i
                            ></a
                          >
                        </div>
                        <a href="#" class="post-share-b"
                          ><i class="material-icons">share</i> Share</a
                        >
                      </div>
                    </div>
                    <div class="item-content">
                      <div class="theiaStickySidebar">
                        <div class="item-header">
                          <span class="item-categories">
                            <a
                              href="blog.html"
                              style="background-color: #ff9d3b;"
                              ><i class="material-icons">trending_up</i></a
                            >
                          </span>
                          <a href="post.html"
                            ><img
                              src="vue_auth/images/photos/image-18.jpg"
                              alt=""
                          /></a>
                        </div>
                        <div class="item-inner">
                          <h2>
                            <a href="post.html"
                              >Wait, Whaaat? These 17 Paintings Cost Over 10
                              Million Bucks</a
                            >
                          </h2>
                          <div class="item-meta">
                            <a href="blog.html" class="item-meta-i"
                              ><img
                                src="vue_auth/images/no-avatar.jpg"
                                alt=""
                              />John Doe</a
                            >
                            <span class="item-meta-i">5 hours ago</span>
                            <a href="post.html" class="item-meta-i"
                              ><i class="material-icons">chat_bubble_outline</i
                              >30 comments</a
                            >
                            <span class="item-meta-i"
                              ><i class="material-icons">share</i>295
                              shares</span
                            >
                          </div>
                          <p>
                            Augue, dictum nec consectetur quis, elementum eu
                            arcu. Nunc ornare arcu lacus, quis aliquet odio
                            bibendum non. Nam vitae libero mauris. Suspendisse
                            vitae purus ligula. Morbi sed diam eget dolor
                            posuere convallis vel vel nisl. Nulla sagittis
                            efficitur ex, at sodales massa pulvinar a. Nunc quis
                            lacinia eros. Fusce acipsum gravida, tristique sed
                            felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="ot-panel-pager">
										<a class="prev page-numbers" href="#"><i class="fa fa-angle-double-left"></i>Previous</a>
										<a class="page-numbers" href="#">1</a>
										<span class="page-numbers current">2</span>
										<a class="page-numbers" href="#">3</a>
										<a class="page-numbers" href="#">4</a>
										<a class="page-numbers" href="#">5</a>
										<a class="next page-numbers" href="#">Next<i class="fa fa-angle-double-right"></i></a>
									</div> -->

                <div class="ot-panel-pager">
                  <a href="#" class="ot-pager-button">View more posts</a>
                </div>

                <!-- <div class="ot-panel-pager">
										<a href="#" class="ot-pager-button left"><i class="fa fa-angle-double-left"></i>Newer posts</a>
										<a href="#" class="ot-pager-button right active">Older posts<i class="fa fa-angle-double-right"></i></a>
										<p>3 of 7 pages</p>
									</div> -->

                <!-- END .ot-main-content -->
              </div>

              <!-- BEGIN .sidebar -->
              <div class="otg-item otg-t-4 sidebar">
                <div class="widget">
                  <!-- <h3>Newsletter</h3> -->
                  <form
                    id="mc4wp-form-1"
                    class="mc4wp-form mc4wp-form-126"
                    method="post"
                    data-id="126"
                  >
                    <div class="mc4wp-form-fields">
                      <h4>Subscribe</h4>
                      <strong>Newsletter</strong>
                      <div>
                        <label>
                          <span>Email address</span>
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Your email address"
                            required=""
                          />
                        </label>

                        <p>
                          <input type="submit" value="Subscribe today" />
                        </p>
                      </div>
                      <p>
                        Subscribe for free and get the latest news and offers
                      </p>
                    </div>
                    <div class="mc4wp-response">
                      <div class="mc4wp-alert mc4wp-success">
                        <p>
                          Thank you, your sign-up request was successful! Please
                          check your email inbox to confirm.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="widget ot-widget-wide-posts">
                  <h3>Popular posts</h3>
                  <div class="widget-content">
                    <div class="item">
                      <a
                        href="post.html"
                        class="otgif-overlay"
                        data-otgif-icon="play_arrow"
                        ><i class="material-icons">whatshot</i
                        ><img src="vue_auth/images/photos/image-12.jpg" alt=""
                      /></a>
                      <h4>
                        <a href="post.html"
                          >Wait, Whaaat? These 17 Paintings Cost Over 10 Million
                          Bucks</a
                        >
                      </h4>
                    </div>

                    <div class="item">
                      <a
                        href="post.html"
                        class="otgif-overlay"
                        data-otgif-icon="play_arrow"
                        ><i class="material-icons">whatshot</i
                        ><img src="vue_auth/images/photos/image-13.jpg" alt=""
                      /></a>
                      <h4>
                        <a href="post.html"
                          >Wait, Whaaat? These 17 Paintings Cost Over 10 Million
                          Bucks</a
                        >
                      </h4>
                    </div>

                    <div class="item">
                      <a
                        href="post.html"
                        class="otgif-overlay"
                        data-otgif-icon="play_arrow"
                        ><i class="material-icons">whatshot</i
                        ><img src="vue_auth/images/photos/image-14.jpg" alt=""
                      /></a>
                      <h4>
                        <a href="post.html"
                          >Wait, Whaaat? These 17 Paintings Cost Over 10 Million
                          Bucks</a
                        >
                      </h4>
                    </div>
                  </div>
                  <a href="blog.html" class="widget-button"
                    >View more of this</a
                  >
                </div>

                <div class="widget ot-aspace-block">
                  <!-- <h3>Banner</h3> -->
                  <div class="widget-content">
                    <a href="#"
                      ><img src="vue_auth/images/aside-1.png" alt=""
                    /></a>
                  </div>
                </div>

                <div class="widget ot-comments-block">
                  <h3>Recent comments</h3>
                  <div class="widget-content">
                    <div class="item">
                      <i class="item-icon material-icons">comment</i>
                      <div class="item-content">
                        <span><a href="blog.html">Orange Themes</a>on</span>
                        <h4>
                          <a href="post.html"
                            >Watch Out. This Girl Knows How to Sell Video
                            Games</a
                          >
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <i class="item-icon material-icons">comment</i>
                      <div class="item-content">
                        <span><a href="blog.html">Orange Themes</a>on</span>
                        <h4>
                          <a href="post.html"
                            >Watch Out. This Girl Knows How to Sell Video
                            Games</a
                          >
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <i class="item-icon material-icons">comment</i>
                      <div class="item-content">
                        <span><a href="blog.html">Orange Themes</a>on</span>
                        <h4>
                          <a href="post.html"
                            >Watch Out. This Girl Knows How to Sell Video
                            Games</a
                          >
                        </h4>
                      </div>
                    </div>
                    <div class="item">
                      <i class="item-icon material-icons">comment</i>
                      <div class="item-content">
                        <span><a href="blog.html">Orange Themes</a>on</span>
                        <h4>
                          <a href="post.html"
                            >Watch Out. This Girl Knows How to Sell Video
                            Games</a
                          >
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- END .sidebar -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="ot-wide-container ot-wide-container-border ot-wide-container-dark" style="background-color: #005bac;">
					<div class="container">

						<div class="ot-wide-container-inner">
							<p>asd</p>
						</div>

					</div>
				</div>

				<div class="ot-wide-container ot-wide-container-border ot-wide-container-dark">
					<div class="container">

						<div class="ot-wide-container-inner">
							<p>asd</p>
						</div>

					</div>
				</div>

				<div class="ot-wide-container ot-wide-container-border">
					<div class="container">

						<div class="ot-wide-container-inner">
							<p>asd</p>
						</div>

					</div>
				</div>

				<div class="ot-wide-container ot-wide-container-border">
					<div class="container">

						<div class="ot-wide-container-inner">
							<p>asd</p>
						</div>

					</div>
				</div> -->

      <!-- BEGIN #content -->
    </main>

    <!-- BEGIN #footer -->
    <footer id="footer">
      <div id="footer-widgets">
        <div class="container">
          <div class="otg otg-items-4 otg-h-40 otg-v-40">
            <div class="otg-item widget">
              <h3>About company</h3>
              <div class="widget-content">
                <p>
                  Qui etiam prompta id, vix id epicurei repudiare, id mel viris
                  doming persius. Quis mucius utamur his ei. Ferri adhuc
                  deseruisse id eam, vel eleifend
                </p>
                <p>
                  Persecuti moderatius pro cu, cibo assentior eloquentiam mel
                  ei. Qui ne movet salutatus dignissim.
                </p>
                <p>Epicurei repudiare, doming id mel viris doming persius.</p>
              </div>
            </div>

            <div class="otg-item widget ot-widget-square-posts">
              <h3>Funniest gifs</h3>
              <div class="widget-content">
                <div class="otg otg-items-3 otg-h-20 otg-v-20">
                  <div class="otg-item">
                    <a
                      href="post.html"
                      class="otgif-overlay"
                      data-otgif-text="GIF"
                      ><i class="material-icons">whatshot</i
                      ><img src="vue_auth/images/photos/image-4.jpg" alt=""
                    /></a>
                  </div>

                  <div class="otg-item">
                    <a
                      href="post.html"
                      class="otgif-overlay"
                      data-otgif-text="GIF"
                      ><i class="material-icons">whatshot</i
                      ><img src="vue_auth/images/photos/image-5.jpg" alt=""
                    /></a>
                  </div>

                  <div class="otg-item">
                    <a
                      href="post.html"
                      class="otgif-overlay"
                      data-otgif-text="GIF"
                      ><i
                        class="material-icons"
                        style="background-color: #efed32; color: #444;"
                        >star_border</i
                      ><img src="vue_auth/images/photos/image-6.jpg" alt=""
                    /></a>
                  </div>

                  <div class="otg-item">
                    <a
                      href="post.html"
                      class="otgif-overlay"
                      data-otgif-text="GIF"
                      ><i
                        class="material-icons"
                        style="background-color: #efed32; color: #444;"
                        >star_border</i
                      ><img src="vue_auth/images/photos/image-7.jpg" alt=""
                    /></a>
                  </div>

                  <div class="otg-item">
                    <a
                      href="post.html"
                      class="otgif-overlay"
                      data-otgif-text="GIF"
                      ><i
                        class="material-icons"
                        style="background-color: #ff4d2a;"
                        >access_time</i
                      ><img src="vue_auth/images/photos/image-8.jpg" alt=""
                    /></a>
                  </div>

                  <div class="otg-item">
                    <a
                      href="post.html"
                      class="otgif-overlay"
                      data-otgif-text="GIF"
                      ><i
                        class="material-icons"
                        style="background-color: #ff4d2a;"
                        >access_time</i
                      ><img src="vue_auth/images/photos/image-9.jpg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <a href="blog.html" class="widget-button">View more of this</a>
            </div>

            <div class="otg-item widget ot-widget-wide-posts">
              <h3>Popular posts</h3>
              <div class="widget-content">
                <div class="item">
                  <a
                    href="post.html"
                    class="otgif-overlay"
                    data-otgif-icon="play_arrow"
                    ><i class="material-icons">whatshot</i
                    ><img src="vue_auth/images/photos/image-10.jpg" alt=""
                  /></a>
                  <h4><a href="post.html">His eu volumus dissentiunt</a></h4>
                </div>

                <div class="item">
                  <a
                    href="post.html"
                    class="otgif-overlay"
                    data-otgif-icon="play_arrow"
                    ><i class="material-icons">whatshot</i
                    ><img src="vue_auth/images/photos/image-11.jpg" alt=""
                  /></a>
                  <h4><a href="post.html">Vix veri tempor populo ea</a></h4>
                </div>
              </div>
            </div>

            <div class="otg-item widget ot-widget-social-block">
              <h3>We're on social media</h3>
              <div class="widget-content">
                <div class="otg otg-items-3 otg-h-10 otg-v-10">
                  <div class="otg-item">
                    <a href="#" class="item ot-soc-color-facebook"
                      ><i class="fa fa-facebook"></i><span>Facebook</span></a
                    >
                  </div>

                  <div class="otg-item">
                    <a href="#" class="item ot-soc-color-twitter"
                      ><i class="fa fa-twitter"></i><span>Twitter</span></a
                    >
                  </div>

                  <div class="otg-item">
                    <a href="#" class="item ot-soc-color-google-plus"
                      ><i class="fa fa-google-plus"></i><span>Google+</span></a
                    >
                  </div>

                  <div class="otg-item">
                    <a href="#" class="item ot-soc-color-reddit"
                      ><i class="fa fa-reddit-alien"></i><span>Reddit</span></a
                    >
                  </div>

                  <div class="otg-item">
                    <a href="#" class="item ot-soc-color-youtube"
                      ><i class="fa fa-youtube-play"></i><span>Youtube</span></a
                    >
                  </div>

                  <div class="otg-item">
                    <a href="#" class="item ot-soc-color-tumblr"
                      ><i class="fa fa-tumblr"></i><span>Tumblr</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-copy">
        <div class="container">
          <p>
            &copy; Copyright 2016 by
            <a href="http://orange-themes.net/" target="_blank"
              >Orange-Themes.net</a
            >. All rights reserved.
          </p>
          <ul class="load-responsive">
            <li><a href="full-width.html">Disclaimer</a></li>
            <li><a href="full-width.html">Terms of Service</a></li>
            <li><a href="full-width.html">Privacy Policy</a></li>
            <li><a href="contact.html">Contact us</a></li>
          </ul>
        </div>
      </div>

      <!-- END #footer -->
    </footer>

    <!-- END #boxed -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Index",
  components: {},
  mounted() {
    //  if(this.User == "admin@gmail.com"){
    //    this.$router.push("/admin");
    //  }
  },
  computed: {
    ...mapGetters({ User: "StateUser" }),
  },
};
</script>

<style></style>
