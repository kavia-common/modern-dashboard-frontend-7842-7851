import React from 'react';
import './Banner.css';
import '../styles/common.css';

// PUBLIC_INTERFACE
export default function Banner() {
  /**
   * Renders the Banner screen converted from the static Figma export.
   * This component preserves absolute positioning and inline style values
   * to match the reviewed design precisely.
   */
  return (
    <div id="screen" className="screen style-0" style={{ position: 'relative', width: '1920px', height: '960px', overflow: 'hidden', background: 'var(--color-f8f9fc)' }}>
      {/* Background image rectangle (image 1) */}
      <img src="/assets/figma_image_101_434.png" alt="" className="abs" style={{ left: 0, top: -241, width: 1920, height: 1442, objectFit: 'cover' }} />

      {/* Group 31 / Light container (Frame origin mapped) */}
      <div className="abs style-1" style={{ left: 528, top: 41.184, width: 1351.447, height: 760.189, borderRadius: 'var(--radius-23-065)' }}>
        {/* Rectangle 22 and 21 (mask base behind right activity column) */}
        <div className="abs style-2" style={{ left: 520.347, top: 117.548, width: 356.866, height: 571.549, borderRadius: 'var(--radius-16-893)' }}></div>
        <div className="abs style-2" style={{ left: 520.347, top: 117.548, width: 356.866, height: 571.549, borderRadius: 'var(--radius-16-893)' }}></div>

        {/* Frame 1: top small metrics bar */}
        <div className="abs style-3" style={{ left: -175.084, top: 117.548, width: 653.199, height: 105.582 }}>
          {/* Back rect 2 with border+shadow (fills full Frame 1) */}
          <div className="abs style-113" style={{ left: 0, top: 0, width: 653.199, height: 105.582, borderRadius: 'var(--radius-14-078)' }}></div>

          {/* Group 5: Projects */}
          <div className="abs" style={{ left: 28.155, top: 23.932, width: 130.921, height: 57.718 }}>
            <div className="abs style-5" style={{ left: 0, top: 7.039, width: 44.344, height: 44.344, borderRadius: 'var(--radius-11-262)' }}></div>
            <div className="abs typo-70" style={{ left: 52.791, top: 10.554, width: 42.937, height: 14.078 }}>Projects</div>
            <div className="abs typo-71" style={{ left: 52.791, top: 30.967, width: 7.743, height: 17.597 }}>3</div>
            <div className="abs" style={{ left: 14.078, top: 22.922, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3, opacity: 0.9 }}></div>
            <div className="abs style-10" style={{ right: 0, top: 0, width: 0, height: 57.718, borderLeft: '0.703878px solid var(--color-ececee)' }}></div>
          </div>

          {/* Group 6: Requests */}
          <div className="abs" style={{ left: 216.231, top: 23.932, width: 135.849, height: 57.718 }}>
            <div className="abs style-11" style={{ left: 0, top: 7.039, width: 44.344, height: 44.344, borderRadius: 'var(--radius-11-262)' }}></div>
            <div className="abs typo-70" style={{ left: 52.791, top: 10.554, width: 47.864, height: 14.078 }}>Requests</div>
            <div className="abs typo-71" style={{ left: 52.791, top: 30.967, width: 31.675, height: 17.597 }}>3456</div>
            <div className="abs" style={{ left: 14.078, top: 22.922, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3, opacity: 0.9 }}></div>
            <div className="abs style-10" style={{ right: -12.0, top: 0, width: 0, height: 57.718, borderLeft: '0.703878px solid var(--color-ececee)' }}></div>
          </div>

          {/* Group 7: Users */}
          <div className="abs" style={{ left: 380.235, top: 23.932, width: 116.844, height: 57.718 }}>
            <div className="abs style-13" style={{ left: 0, top: 7.039, width: 44.344, height: 44.344, borderRadius: 'var(--radius-11-262)' }}></div>
            <div className="abs typo-70" style={{ left: 52.791, top: 10.554, width: 28.859, height: 14.078 }}>Users</div>
            <div className="abs typo-71" style={{ left: 52.791, top: 30.967, width: 7.743, height: 17.597 }}>3</div>
            <div className="abs" style={{ left: 14.078, top: 22.922, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3, opacity: 0.9 }}></div>
            <div className="abs style-10" style={{ right: -12.0, top: 0, width: 0, height: 57.718, borderLeft: '0.703878px solid var(--color-ececee)' }}></div>
          </div>

          {/* Group 8: Storage */}
          <div className="abs" style={{ left: 525.234, top: 31.0, width: 128.81, height: 44.344 }}>
            <div className="abs style-15" style={{ left: 0, top: 0, width: 44.344, height: 44.344, borderRadius: 'var(--radius-11-262)' }}></div>
            <div className="abs typo-70" style={{ left: 52.791, top: 2.815, width: 41.529, height: 14.078 }}>Storage</div>
            <div className="abs typo-71" style={{ left: 52.791, top: 23.227, width: 76.019, height: 17.597 }}>128/500 GB</div>
            <div className="abs" style={{ left: 14.078, top: 14.081, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3, opacity: 0.9 }}></div>
          </div>
        </div>

        {/* Back rect 1 (white strip on left) */}
        <div className="abs style-3" style={{ left: 0, top: 0, width: 214.683, height: 760.189 }}></div>

        {/* Dashboard heading + subtext */}
        <div className="abs" style={{ left: -175.084, top: 28.155, width: 280.848, height: 54.199 }}>
          <div className="abs typo-72" style={{ left: 0, top: 0, width: 142.183, height: 37.306 }}>Dashboard</div>
          <div className="abs typo-73" style={{ left: 0, top: 38.713, width: 280.848, height: 15.485 }}>Information about your current plan and usages</div>
        </div>

        {/* Calendar pill */}
        <div className="abs style-18" style={{ left: 651.269, top: 35.194, width: 225.945, height: 42.937, borderRadius: 'var(--radius-8-447)' }}></div>
        <div className="abs typo-74" style={{ left: 685.759, top: 49.272, width: 146.407, height: 16.893 }}>Wednesday, 17 May 2021</div>
        <div className="abs" style={{ left: 849.762, top: 48.048, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3 }}></div>
        <div className="abs" style={{ left: 661.827, top: 48.048, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3 }}></div>

        {/* Frame 2: Graph card */}
        <div className="abs style-2" style={{ left: -175.084, top: 247.765, width: 653.199, height: 316.745, borderRadius: 'var(--radius-16-893)' }}>
          {/* Y-axis line */}
          <div className="abs style-10" style={{ left: 45.752, top: 72.51, width: 0, height: 199.198, borderLeft: '0.703878px solid var(--color-ececee)' }}></div>
          {/* X-axis line */}
          <div className="abs style-10" style={{ left: 45.752, top: 151.308, width: 579.996, height: 0, borderTop: '0.703878px solid var(--color-ececee)' }}></div>

          {/* Vector lines */}
          <div className="abs style-20" style={{ left: 47.16, top: 67.288, width: 534.244, height: 221.722, border: '2.111635px solid var(--color-551fff)', borderRadius: 8, opacity: 0.8 }}></div>
          <div className="abs style-21" style={{ left: 47.16, top: 67.288, width: 526.501, height: 153.445, border: '1.759696px solid var(--color-7549ff)', borderRadius: 8, opacity: 0.8 }}></div>

          {/* X ticks */}
          <div className="abs style-22" style={{ left: 583.099, top: 147.379, width: 0, height: 9.854, borderLeft: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 480.332, top: 147.379, width: 0, height: 9.854, borderLeft: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 377.566, top: 147.379, width: 0, height: 9.854, borderLeft: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 274.8, top: 147.379, width: 0, height: 9.854, borderLeft: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 172.034, top: 147.379, width: 0, height: 9.854, borderLeft: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 69.268, top: 147.379, width: 0, height: 9.854, borderLeft: '1.407757px solid var(--color-ececee)' }}></div>

          {/* Y ticks */}
          <div className="abs style-22" style={{ left: 44.24, top: 129.782, width: 7.039, height: 0, borderTop: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 44.24, top: 91.069, width: 7.039, height: 0, borderTop: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 44.24, top: 52.356, width: 7.039, height: 0, borderTop: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 44.24, top: 13.642, width: 7.039, height: 0, borderTop: '1.407757px solid var(--color-ececee)' }}></div>
          <div className="abs style-22" style={{ left: 44.24, top: -25.775, width: 7.039, height: 0, borderTop: '1.407757px solid var(--color-ececee)' }}></div>

          {/* Axis labels */}
          <div className="abs typo-75" style={{ left: 53.39, top: 162.794, width: 35.898, height: 10.558, textAlign: 'center' }}>10:30 AM</div>
          <div className="abs typo-76" style={{ left: 32.274, top: 124.081, width: 7.743, height: 10.558 }}>1k</div>
          <div className="abs typo-76" style={{ left: 29.458, top: 46.655, width: 9.15, height: 10.558 }}>5k</div>
          <div className="abs typo-76" style={{ left: 29.458, top: -30.771, width: 9.854, height: 10.558 }}>9k</div>
          <div className="abs typo-76" style={{ left: 29.458, top: 84.368, width: 9.15, height: 10.558 }}>3k</div>
          <div className="abs typo-76" style={{ left: 29.458, top: 6.952, width: 9.15, height: 10.558 }}>7k</div>

          <div className="abs typo-75" style={{ left: 258.219, top: 162.794, width: 35.194, height: 10.558 }}>12:30 AM</div>
          <div className="abs typo-75" style={{ left: 156.157, top: 162.794, width: 33.786, height: 10.558 }}>11:30 AM</div>
          <div className="abs typo-75" style={{ left: 360.384, top: 162.794, width: 35.898, height: 10.558 }}>01:30 PM</div>
          <div className="abs typo-75" style={{ left: 462.447, top: 162.794, width: 36.602, height: 10.558 }}>02:30 PM</div>
          <div className="abs typo-76" style={{ left: 568.029, top: 162.794, width: 36.602, height: 10.558 }}>03:30 PM</div>

          {/* Vertical marker and markers */}
          <div className="abs style-10" style={{ left: 443.091, top: -30.446, width: 0, height: 177.025, borderLeft: '0.703878px solid var(--color-ececee)' }}></div>
          <div className="abs style-23" style={{ left: 437.812, top: -35.373, width: 10.558, height: 10.558, borderRadius: '50%' }}></div>
          <div className="abs style-23" style={{ left: 439.924, top: 144.413, width: 6.335, height: 6.335, borderRadius: '50%' }}></div>

          {/* Small stat card near marker */}
          <div className="abs style-114" style={{ left: 352.643, top: -35.019, width: 81.65, height: 57.718, borderRadius: 'var(--radius-8-447)', boxShadow: 'var(--shadow-1)' }}></div>
          <div className="abs typo-77" style={{ left: 369.536, top: -25.164, width: 47.864, height: 14.078 }}>API Calls</div>
          <div className="abs typo-78" style={{ left: 377.982, top: -4.752, width: 30.971, height: 17.597 }}>7546</div>

          {/* Filter icon placeholder */}
          <div className="abs" style={{ left: 583.151, top: -44.344, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3 }}></div>
        </div>

        {/* Right column base */}
        <div className="abs style-2" style={{ left: 520.347, top: 273.917, width: 356.866, height: 533.54, borderRadius: 'var(--radius-16-893)' }}></div>
        <div className="abs typo-79" style={{ left: 548.503, top: -297.632, width: 58.422, height: 22.524, display: 'none' }}>Activity</div>

        {/* Mask Group area for activity list */}
        <div className="abs" style={{ left: 520.347, top: 117.548, width: 356.866, height: 571.549 }}>
          <div className="abs style-2" style={{ left: 0, top: 0, width: 356.866, height: 571.549, borderRadius: 'var(--radius-16-893)' }}></div>

          {/* G1 */}
          <div className="abs style-28" style={{ left: 28.155, top: 75.095, width: 300.557, height: 100.655 }}>
            <img className="abs style-26" src="/assets/figma_image_101_240.png" alt="" style={{ left: 0, top: 0, width: 38.713, height: 38.713, borderRadius: '50%' }} />
            <div className="abs typo-81" style={{ left: 52.791, top: 0, width: 97.135, height: 15.485 }}>James Anderson</div>
            <div className="abs typo-82" style={{ left: 53.495, top: 23.932, width: 219.61, height: 64.053 }}>
              Called “Books-API” with the JavaScript webhook and commented. <br />“Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.”
            </div>
            <div className="abs style-10" style={{ left: 0, bottom: -0.001, width: 300.556, height: 0, borderTop: '0.703878px solid var(--color-ececee)' }}></div>
          </div>

          {/* G2 */}
          <div className="abs" style={{ left: 28.155, top: 196.866, width: 300.557, height: 100.655 }}>
            <div className="abs style-10" style={{ left: 0, bottom: -0.001, width: 300.556, height: 0, borderTop: '0.703878px solid var(--color-ececee)' }}></div>
            <img className="abs style-26" src="/assets/figma_image_101_236.png" alt="" style={{ left: 0, top: 0, width: 38.713, height: 38.713, borderRadius: '50%' }} />
            <div className="abs typo-73" style={{ left: 52.791, top: 0, width: 68.276, height: 15.485 }}>Vector Sam</div>
            <div className="abs typo-80" style={{ left: 53.495, top: 23.932, width: 219.61, height: 64.053 }}>
              Called “Books-API” with the JavaScript webhook and commented. <br />“Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.”
            </div>
          </div>

          {/* G3 */}
          <div className="abs" style={{ left: 28.155, top: 318.637, width: 300.557, height: 100.655 }}>
            <div className="abs style-10" style={{ left: 0, bottom: -0.001, width: 300.556, height: 0, borderTop: '0.703878px solid var(--color-ececee)' }}></div>
            <img className="abs style-26" src="/assets/figma_image_101_231.png" alt="" style={{ left: 0, top: 0, width: 38.713, height: 38.713, borderRadius: '50%' }} />
            <div className="abs typo-73" style={{ left: 52.791, top: 0, width: 77.427, height: 15.485 }}>Nether Stone</div>
            <div className="abs typo-80" style={{ left: 53.495, top: 23.932, width: 219.61, height: 64.053 }}>
              Called “Books-API” with the JavaScript webhook and commented. <br />“Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.”
            </div>
          </div>

          {/* G4 */}
          <div className="abs" style={{ left: 28.155, top: 440.408, width: 300.557, height: 100.655 }}>
            <div className="abs style-10" style={{ left: 0, bottom: -0.001, width: 300.556, height: 0, borderTop: '0.703878px solid var(--color-ececee)' }}></div>
            <img className="abs style-26" src="/assets/figma_image_101_226.png" alt="" style={{ left: 0, top: 0, width: 38.713, height: 38.713, borderRadius: '50%' }} />
            <div className="abs typo-73" style={{ left: 52.791, top: 0, width: 64.053, height: 15.485 }}>Jeff Sussex</div>
            <div className="abs typo-80" style={{ left: 53.495, top: 23.932, width: 219.61, height: 64.053 }}>
              Called “Books-API” with the JavaScript webhook and commented. <br />“Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.”
            </div>
          </div>

          {/* Bottom (James Anderson in Mask Group) */}
          <img className="abs style-26" src="/assets/figma_image_101_221.png" alt="" style={{ left: 28.155, top: 517.682, width: 38.713, height: 38.713, borderRadius: '50%' }} />
          <div className="abs typo-73" style={{ left: 80.946, top: 517.615, width: 97.135, height: 15.485 }}>James Anderson</div>
          <div className="abs typo-80" style={{ left: 81.65, top: 540.139, width: 247.061, height: 64.053 }}>
            Called “Books-API” with the JavaScript webhook and commented. <br />“Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.”
          </div>
        </div>

        {/* Integrations label */}
        <div className="abs typo-79" style={{ left: 548.503, top: 298.553, width: 92.208, height: 22.524 }}>Integrations</div>

        {/* Left side menu rectangles */}
        <div className="abs style-29" style={{ left: -403.845, top: 117.548, width: 158.373, height: 52.087, borderRadius: 'var(--radius-70-388)' }}></div>
        <div className="abs style-30" style={{ left: -403.845, top: 187.232, width: 158.373, height: 52.087, borderRadius: 'var(--radius-70-388)' }}></div>
        <div className="abs style-29" style={{ left: -403.845, top: 344.197, width: 158.373, height: 52.087, borderRadius: 'var(--radius-70-388)' }}></div>
        <div className="abs style-29" style={{ left: -403.845, top: 256.916, width: 158.373, height: 52.087, borderRadius: 'var(--radius-70-388)' }}></div>
        <div className="abs style-29" style={{ left: -403.845, top: 413.881, width: 158.373, height: 52.087, borderRadius: 'var(--radius-70-388)' }}></div>
        <div className="abs style-29" style={{ left: -403.845, top: 483.565, width: 158.373, height: 52.087, borderRadius: 'var(--radius-70-388)' }}></div>

        {/* Menu groups with icons and text */}
        <div className="abs" style={{ left: -379.209, top: 204.125, width: 75.315, height: 18.301 }}>
          <div className="abs typo-83" style={{ left: 31.0, top: 0.695, width: 44.344, height: 17.597 }}>Billings</div>
          <div className="abs" style={{ left: 0, top: 0, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3 }}></div>
        </div>

        <div className="abs" style={{ left: -348.238, top: 361.794, width: 50.679, height: 17.597 }}>
          <div className="abs typo-84" style={{ left: 0, top: 0, width: 50.679, height: 17.597 }}>Settings</div>
        </div>

        <div className="abs" style={{ left: -379.209, top: 273.809, width: 81.65, height: 19.005 }}>
          <div className="abs typo-84" style={{ left: 31.0, top: 1.408, width: 50.679, height: 17.597 }}>Invoices</div>
          <div className="abs" style={{ left: 0, top: 0, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3 }}></div>
        </div>

        <div className="abs" style={{ left: -348.238, top: 432.181, width: 29.563, height: 17.597 }}>
          <div className="abs typo-84" style={{ left: 0, top: 0, width: 29.563, height: 17.597 }}>Help</div>
        </div>

        <div className="abs" style={{ left: -348.238, top: 501.865, width: 48.568, height: 17.597 }}>
          <div className="abs typo-84" style={{ left: 0, top: 0, width: 48.568, height: 17.597 }}>Log out</div>
        </div>

        {/* Divider line mid-left */}
        <div className="abs style-10" style={{ left: -393.991, top: 326.784, width: 139.368, height: 0, borderTop: '0.703878px solid var(--color-ececee)' }}></div>

        {/* Integrations filter icon (placeholder) */}
        <div className="abs" style={{ left: 832.166, top: 301.368, width: 16.893, height: 16.893, background: 'transparent', border: '1.055818px solid var(--color-92959e)', borderRadius: 3 }}></div>

        {/* Top-left logo Nucleus */}
        <div className="abs" style={{ left: -375.0, top: 38.714, width: 100.729, height: 32.453 }}>
          <div className="abs typo-85" style={{ left: 35.972, top: 6.409, width: 64.757, height: 22.524 }}>Nucleus</div>
          <div className="abs" style={{ left: 0, top: 0, width: 32.453, height: 32.453 }}>
            <div className="abs style-33" style={{ left: 0, top: 0, width: 32.453, height: 32.453, borderRadius: '50%' }}></div>
            <div className="abs style-33" style={{ left: 0, top: 0, width: 32.453, height: 32.453, borderRadius: '50%' }}></div>
            <div className="abs style-20" style={{ left: 13.72, top: 13.72, width: 5.013, height: 5.013, borderRadius: '50%' }}></div>
          </div>
        </div>
      </div>

      {/* Left outside-of-frame elements per screen coordinates */}
      <div className="abs" style={{ left: 80, top: 100, width: 338, height: 160 }}>
        <div className="typo-16" style={{ whiteSpace: 'pre-wrap', color: 'var(--color-15192c)' }}>Dashboard{'\n'}Design</div>
      </div>

      <div className="abs style-3" style={{ left: 80, top: 803, width: 56, height: 56, borderRadius: '50%' }}>
        <div className="abs style-42" style={{ left: 4.667, top: 4.667, width: 46.667, height: 46.667, borderRadius: '50%' }}></div>
      </div>
      <div className="abs typo-90" style={{ left: 156, top: 820, width: 188, height: 22 }}>dribbble.com/geekyv30</div>
    </div>
  );
}
