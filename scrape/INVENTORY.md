# t65.org scrape inventory

Scraped 2026-10-03 with Playwright (Chromium) from the site's Google Sites address,
`https://sites.google.com/a/t65.org/troop65longbeach/`. The t65.org domain itself is
blocked by this environment's network policy, but it serves the same site.

| File | What it holds |
|---|---|
| `content/*.md` | Text of each page as markdown, one file per page (nav and footer included) |
| `images/` | 88 images. 85 are originals (`=s0`). 3 are Drive preview thumbnails of embedded docs |
| `images.json` | Per image: file, page(s), placement, source URL, size fetched |
| `links.json` | 26 outbound links, embeds, the calendar, the form, the map |
| `pages.json` | The 12 pages and their URLs |

Note on images: Google Sites image URLs are signed and expire within minutes, so the
crawler downloads each one inside the browser session while the page is open. A plain
`=s0` swap on a saved URL returns 403.

## Pages

| Page | URL slug | What's on it |
|---|---|---|
| Home | `home` | Logo, banner, short intro, meeting schedule, "Summer Adventure: Camp Baker 2026" photo gallery (10 photos), email list signup |
| About | `about` | Intro paragraph, meeting schedule (differs from Home, see below), social media card, Google Map embed of the church |
| Announcements | `announcements` | Age rules for joining, Board of Review signup form, BOR schedule, next Court of Honor |
| Calendar | `calendar` | Embedded Google Calendar (two calendars, agenda view) |
| Patrols | `patrols` | Troop duties spreadsheet embed, write-ups of the four patrols |
| Troop Officers | `troop-officers` | 17 youth officers with photo and position |
| Adult Leaders | `adult-leaders` | One embedded Google Doc listing adult leaders. No text on the page itself |
| T65 Eagle Lair | `t65-eagle-lair` | Eagle Scout tradition paragraph, 19 photos of the leather name panels |
| Outdoor Activities and Events | `outdoor-activities-and-events` | 2026 Camporee and 2026 Pre-Summer Camp write-ups with photos, activity schedule doc embed |
| Helpful Links | `helpful-links` | BeAScout signup, council link, merit badge and advancement links |
| Resource Center | `resource-center` | Scoutbook app link and a note to contact the Advancement Chair |
| Training | `training` | Youth Protection, council training calendar, NYLT, "Bear Spotted!!!" photos |

Every page ends with "Sign up to get our emails HERE" (Simplelists).

## Facts found

From the scrape (page in brackets):

- Located in the City of Long Beach, California, under the **Iron Star District** [home, about]. Council: **Long Beach Area Council** [helpful-links].
- Started in 1937 [home, about]. Matches the verified list.
- "Currently has 40 scouts" [home]; "about 40 scouts with 4 patrols" [about].
- Meets at **Lakewood Village Community Church** [home, about]. Map embed address: **4515 Sunfield Ave, Long Beach, CA 90808** [about].
- Meeting schedule [home]:
  - Troop meetings: 1st and 3rd Tuesdays, 7:30 PM
  - Patrol meetings: 1st and 3rd Tuesdays, 6:30 PM
  - Troop Committee Meeting (all parents welcome): 1st Tuesday, 6:30 PM
  - Patrol Leaders Council (PLC): 4th Tuesday, 7:00 PM
  - Board of Review (BOR): 4th Tuesday, 6:30 PM
- Four patrols: **Sabertooths, Eagles, Diamondbacks, Falcons** (officer page calls the last one "Flaming Falcons") [patrols].
  - Sabertooths: newest patrol, "only celebrated 15 years in the troop."
  - Eagles: longest running patrol, known for high participation.
  - Diamondbacks and Falcons: short self-descriptions, no facts.
- Eagle Lair: names of every Troop 65 Eagle Scout are burned into leather and hung in the Eagle Lair. "70+ year tradition." "Visit Troop 65 in person to see the 200+ names" [t65-eagle-lair]. Matches the verified 200+.
- Joining: a Cub Scout who finished Arrow of Light can bridge over at age 10 and in 5th grade. Youth not from Cub Scouts can join at 10 and in 5th grade. Scouts can stay until they turn 18 [announcements].
- Board of Review: 4th Tuesday of every month, starting 6:30 pm. Reserve with a Google Form after your Scoutmaster Conference [announcements].
- Next Court of Honor: December, date TBD, at Lakewood Village Community Church [announcements]. Scouts get rank advancements and merit badge awards there.
- Five scouts from Troop 65 have completed NYLT [training].
- Trips with write-ups [outdoor-activities-and-events]:
  - **2026 Firestone Scout Reservation Camporee.** Troop competed; "did not win as many trophies this year"; new scouts got their first taste of T65 competition.
  - **2026 Pre-Summer Camp at Chino Hills State Park.** Open space for games (Three-Flags-Up, baseball), and a hike.
- Summer camp: **Camp Baker 2026** (home page gallery title only, no write-up).
- Social: **@Troop65LB** on Facebook and Instagram. This appears only inside an image (014). No link URL was on the site.
- The 2026 activity schedule doc (thumbnail 078) lists events like Winter Camp at Camp Emerson, Scout Sunday, NYLT weekends, Desert Camp, Pancake Breakfast, Courts of Honor, Council Camporee, and Pre-Summer Camp. It is a document image, so the full list should be read from the Google Doc itself.

### Conflicts and gaps to decide on

- **Meeting times.** Your verified list says 6:30 to 8:30 pm. The site splits it: patrol meetings 6:30, troop meeting 7:30. These fit together, so I'll present it as 6:30 to 8:30 pm unless you say otherwise.
- **Parent meeting night.** Home says Troop Committee meets the 1st Tuesday at 6:30 PM. About says Troop Leader/Parent meetings are the 2nd Tuesday at 7:30 PM. Which is current?
- **Scout count.** "40 scouts" vs "about 40 scouts." Fine to say about 40, or leave it out.
- **Not on the site at all:** the basement space (no room-by-room photos or text), service projects, a "what a first visit looks like" description, campout format, any troop history beyond 1937, and the nickname "Purple Plague" (it's on the logo only). These will get `[NEEDS INFO]` markers or come from your verified list.
- **No visit-a-meeting form was found.** The only join links are BeAScout ("SIGN UP") and the email list. The one Google Form on the site is for reserving a Board of Review.
- The source text has typos ("welcoem", "amazign", "satyed", "ah ike", "wi nas much"). I'll fix spelling when importing.

## Troop officers

Positions and photos as shown on the Troop Officers page. Photo mapping was checked against the on-page layout.

| Position | Name | Photo |
|---|---|---|
| Senior Patrol Leader | Maxwell Worley | 026 |
| Assistant Senior Patrol Leader | Mason Worley | 027 |
| Quartermaster | Neil Truitt | 028 |
| Scribe | Tobias Yi | 029 |
| Sabertooths Patrol Leader | George Cota | 030 |
| Diamondbacks Patrol Leader | Mathew Fausto | 031 |
| Eagles Patrol Leader | Henry Cerulle | 032 |
| Flaming Falcons Patrol Leader | Liam Dougherty | 033 |
| Webmaster | Elijah Donaldson | 034 |
| Chaplain Aide (site spells it "Chaplain Aid") | Jack Hackert | 035 |
| Historian | Thomas Truitt | 036 |
| Librarian | Samuel Gonzalez | 037 (placeholder: "Updated Photo Coming Soon") |
| Outdoor Ethics Guide | Alex Joannes | 038 |
| Troop Instructor | Luke Price | 039 |
| Troop Instructor | Jacob Arnoult | 040 |
| Recruitment Advisor | David Mariaca | 041 |
| Bugler | Isiah Leonard | 042 |

Adult leaders exist only as an image of a Google Doc (043, "Updated 8/4/2026"). It lists the committee, Scoutmaster, assistant Scoutmasters, and advisors by name. Per your rule (no names except troop officers), none of them will go on the site. The Resource Center page also names the Advancement Chair. That name will be dropped too.

## Links and embeds (`links.json`)

**Troop section candidates**
- Calendar embed (public, agenda view, two calendars): `bsatroop65longbeach@t65.org` and `scoutwebmaster@t65.org`. Both are public (their iCal feeds load without login).
- Board of Review signup (Google Form): `docs.google.com/forms/d/e/1FAIpQLSdsloIKayiBL8Gmsi1dGuxzQHe77AF_eJc4cwRNkQQc2HEIoA/viewform`
- Troop Duties Schedule (Google Sheet): `14oY3bGrfJztlJZWMqr11TLacFo2mbj53i73wp-C1VP4`
- Adult Leaders (Google Doc): `1jEvGEVMwkCddvJ_jWgKChrNVEYafPeIp10eOoJssco4`
- Troop Activity Schedule (Google Doc; label says 2025, image shows 2026): `1AK3FooUJywt_tYsSnGcp_zy13gHwuzuliTuJXlszn0w`
- Email list signup: `lists.simplelists.com/troop65/subscribe/` (About also uses `www.simplelists.com/subscribe/troop65/`)
- Scoutbook: `scoutbook.scouting.org`

**Advancement and merit badges:** BSA merit badge page, digital Blue Card PDF (from cccbsa.org), Rank Advancement Requirements PDF, Eagle Project Workbook PDF, National Outdoor Awards, Board of Review practice questions (boyscouttrail.com), Merit Badge Counselor application PDF.

**Health and training:** Scouting America medical forms (AHMR), Youth Protection Training, Long Beach Area Council training calendar, NYLT.

**Council and joining:** Long Beach Area Council (longbeachbsa.org), BeAScout listing for this unit (`unitID=210515`).

**Map:** Google Maps embed of 4515 Sunfield Ave, Long Beach, CA 90808.

## Images

The `logo.png` you mentioned is **001** (the round purple and gold badge). It will be copied to `logo.png` at build time.

Usable real photos of scouts: **003 to 013, 026 to 042, 044 to 077, 086 to 088.** The animal photos (020 to 023) and the BSA graphics look like stock or official artwork and will not be used.

| File | Description |
|---|---|
| 001-home.png | Troop logo: round purple badge, gold fleur-de-lis, "TROOP 65", "Purple Plague", "Serving God and Country since 1937", "Long Beach, California" |
| 002-home.png | Home banner: "TROOP 65" in purple over a sunset photo of the troop in uniform by a bridge, "Adventure, Leadership, Service" |
| 003-home.png | Wide crop of the troop group sitting on a carved bear statue in a forest |
| 004-home.jpg | Two scouts in life jackets grinning on a motorboat on a lake |
| 005-home.jpg | Scout in purple shirt and ear protection at a rifle range bench |
| 006-home.jpg | Troop group photo on and around a carved wooden bear in a pine forest |
| 007-home.jpg | Four scouts on a beach with an arched concrete bridge behind them |
| 008-home.jpg | Scouts sandboarding down a big dune, troop flag at the top |
| 009-home.jpg | Scouts exploring tide pools on a rocky beach |
| 010-home.jpg | Smiling scout next to an archery target with arrows in the bullseye |
| 011-home.jpg | Scouts around a campfire ring at dusk, cooking on sticks |
| 012-home.jpg | Two scouts in helmets and harnesses in front of a climbing tower |
| 013-home.jpg | Two scouts in a purple canoe, one holding a paddle overhead |
| 014-about.png | Screenshot of the Troop65LB social profile card (Facebook and Instagram icons) |
| 015-announcements.png | Graphic: Scouts BSA emblem, silhouettes crossing a rope bridge, Cub Scout emblem (bridging over) |
| 016-announcements.png | "Board of Review" heading over a row of rank patches |
| 017-announcements.png | Full-size site banner, same design as 002 (3840 px wide) |
| 018-patrols.jpg | Purple-to-gold blurred background used as a page header (gradient, will not use) |
| 019-patrols.jpg | Preview thumbnail of the Troop Duties Schedule spreadsheet |
| 020-patrols.jpg | Sabertooth tiger illustration (Sabertooths patrol; looks like stock or AI art) |
| 021-patrols.jpg | Bald eagle close-up (Eagles patrol; stock) |
| 022-patrols.jpg | Coiled rattlesnake (Diamondbacks patrol; stock) |
| 023-patrols.jpg | Falcon head close-up (Falcons patrol; stock) |
| 024-troop-officers.png | Senior Patrol Leader patch (decorative) |
| 025-troop-officers.png | Assistant Senior Patrol Leader patch (decorative) |
| 026-troop-officers.jpg | Officer portrait: Senior Patrol Leader, in front of the painted Troop 65 60th Anniversary mural |
| 027-troop-officers.jpg | Officer portrait: Assistant Senior Patrol Leader, same mural |
| 028-troop-officers.jpg | Officer portrait: Quartermaster, standing in front of a US flag in the meeting room |
| 029-troop-officers.jpg | Officer portrait: Scribe, mural |
| 030-troop-officers.jpg | Officer portrait: Sabertooths Patrol Leader, mural |
| 031-troop-officers.jpg | Officer portrait: Diamondbacks Patrol Leader, mural |
| 032-troop-officers.jpg | Officer portrait: Eagles Patrol Leader, mural |
| 033-troop-officers.jpg | Officer portrait: Flaming Falcons Patrol Leader, purple hoodie, mural |
| 034-troop-officers.jpg | Officer portrait: Webmaster, mural |
| 035-troop-officers.jpg | Officer portrait: Chaplain Aide, mural |
| 036-troop-officers.jpg | Officer portrait: Historian, mural |
| 037-troop-officers.png | Placeholder for the Librarian: BSA emblem with "Updated Photo Coming Soon" |
| 038-troop-officers.jpg | Officer portrait: Outdoor Ethics Guide, full mural visible ("Troop 65, 60th Anniversary, 1937 to 1997") |
| 039-troop-officers.jpg | Officer portrait: Troop Instructor, in the basement by the stairs with Eagle Lair leathers on the wall |
| 040-troop-officers.jpg | Officer portrait: Troop Instructor, mural |
| 041-troop-officers.jpg | Officer portrait: Recruitment Advisor, seated in front of a US flag and troop banners |
| 042-troop-officers.jpg | Officer portrait: Bugler, mural |
| 043-adult-leaders.png | Preview thumbnail of the Adult Leaders Google Doc (names, not for site use) |
| 044-t65-eagle-lair.jpg | Eagle Lair leather panel hanging from a branch, Eagles 1954 to 1985 |
| 045-t65-eagle-lair.jpg | Eagle Lair leather panel, Eagles 1994 to 1997 |
| 046-t65-eagle-lair.jpg | Eagle Lair leather panel, 1985 to 1990 (faded gray leather) |
| 047-t65-eagle-lair.jpg | Eagle Lair leather panel, 2001 to 2002 |
| 048-t65-eagle-lair.jpg | Closer shot of the 1985 to 1990 panel |
| 049-t65-eagle-lair.jpg | Eagle Lair leather panel, 2003 to 2004 |
| 050-t65-eagle-lair.jpg | Eagle Lair leather panel, 1998 to 2000 |
| 051-t65-eagle-lair.jpg | Eagle Lair leather panel, 2004 to 2006 |
| 052-t65-eagle-lair.jpg | Eagle Lair leather panel, 2006 to 2008 |
| 053-t65-eagle-lair.jpg | Wider shot of the 2006 to 2008 panel with neighbors on the wall |
| 054-t65-eagle-lair.jpg | Eagle Lair leather panel, 2008 to 2011 |
| 055-t65-eagle-lair.jpg | Eagle Lair leather panel, 2011 to 2013 |
| 056-t65-eagle-lair.jpg | Eagle Lair leather panel, 2013 to 2015 |
| 057-t65-eagle-lair.jpg | Second angle of the 2013 to 2015 panel |
| 058-t65-eagle-lair.jpg | Eagle Lair leather panel, 2015 to 2017 |
| 059-t65-eagle-lair.jpg | Second angle of the 2015 to 2017 panel |
| 060-t65-eagle-lair.jpg | Eagle Lair leather panel, 2017 to 2019 |
| 061-t65-eagle-lair.jpg | Eagle Lair leather panel, 2020 to 2023 |
| 062-t65-eagle-lair.jpg | Newest Eagle Lair panel, 2023 to 2024 |
| 063-outdoor-activities-and-events.jpg | Troop group in purple shirts under an entrance gate with banners, hills behind (page header) |
| 064-outdoor-activities-and-events.jpg | Two scouts by a Dutch oven cooking pit at camporee |
| 065-outdoor-activities-and-events.jpg | Scouts gathered at a camporee competition table under a red canopy |
| 066-outdoor-activities-and-events.jpg | Scouts at a rope and pole lashing station on a dirt field |
| 067-outdoor-activities-and-events.jpg | Scouts in sun hats working a water pump challenge |
| 068-outdoor-activities-and-events.jpg | Scouts reading a map and clipboard together |
| 069-outdoor-activities-and-events.jpg | Scouts carrying a teammate on a homemade stretcher (first aid event) |
| 070-outdoor-activities-and-events.jpg | Wide shot of the troop hiking single file through tall golden grass |
| 071-outdoor-activities-and-events.jpg | Scout in a sun hat posing with a camp axe in a roped-off chopping area (Pre-Summer Camp) |
| 072-outdoor-activities-and-events.jpg | Scouts in uniform lined up on a dry field under gray sky |
| 073-outdoor-activities-and-events.jpg | Scouts climbing a steep grassy hillside |
| 074-outdoor-activities-and-events.jpg | Scouts at a camp table with stove and gear, patrol flag behind |
| 075-outdoor-activities-and-events.jpg | Scouts at a picnic table working in their handbooks |
| 076-outdoor-activities-and-events.jpg | Four scouts with packs crossing a creek on a log |
| 077-outdoor-activities-and-events.jpg | Scouts hiking up a narrow trail through dry brush |
| 078-outdoor-activities-and-events.png | Preview thumbnail of the 2026 Activity Schedule doc |
| 079-helpful-links.png | "Scout Me In" BSA logo |
| 080-helpful-links.png | Long Beach Area Council patch |
| 081-helpful-links.png | Collage of merit badge patches |
| 082-resource-center.png | Scoutbook app promo screenshot |
| 083-training.png | "Youth Protection Begins With You" seal |
| 084-training.png | "Official Training Page for 2022, Long Beach Area Council" graphic |
| 085-training.png | NYLT and "Trained" patches |
| 086-training.jpg | Five scouts in uniform with ice cream at a Dairy Queen |
| 087-training.jpg | Black bear walking past a tree near camp ("Bear Spotted!!!") |
| 088-training.jpg | Scouts in uniform with lanyards and an adult outside under oak trees |

## What I need from you before Step 2

1. **Visit-a-meeting Google Form URL.** Not on the site. Should the button point to the BeAScout listing for now, or do you have a form?
2. **Parent meeting night:** 1st Tuesday at 6:30 or 2nd Tuesday at 7:30?
3. **Basement photos.** None exist on the site beyond portrait backgrounds (the mural, the flag room, the Eagle Lair). The "Our space" page will be mostly `[NEEDS INFO]` photo slots unless you can supply room photos.
4. **Calendar:** OK to embed both calendars as the current site does?
5. **Internal links:** OK to use the grouping above for the Troop section?
