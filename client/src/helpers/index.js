const sort = [
  {id: 1, nama: 'Urut berdasarkan A-Z'},
  {id: 2, nama: 'Urut berdasarkan Z-A'},
  {id: 3, nama: 'Urutkan berdasarkan harga termahal'},
  {id: 4, nama: 'Urutkan berdasarkan harga termurah'},
  {id: 5, nama: 'Urutkan berdasarkan terlama'},
];

const kategori = [
  {id: 0, name: 'Pilih kategori'},
  {
    id: 1,
    nama: 'Pensil',
  },
  {
    id: 2,
    nama: 'Pulpen',
  },
  {
    id: 3,
    nama: 'Penghapus',
  },
  {
    id: 4,
    nama: 'Papan Tulis',
  },
];

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit est id massa venenatis eleifend. Mauris facilisis, nisi sed vulputate tempus, ipsum ex hendrerit nisi, et tristique diam urna eget massa. In sollicitudin lectus nec tortor gravida efficitur. Quisque quis velit ipsum. Cras sit amet augue eget eros semper sagittis. Donec vitae tortor aliquam, posuere dolor non, pretium neque. Nam rutrum, erat vel blandit facilisis, velit arcu luctus massa, a iaculis velit urna sit amet lorem. Duis maximus porta mauris vitae porttitor. Aenean luctus in magna eget venenatis. Donec sit amet ex eget massa aliquet dignissim vel id sem. Pellentesque tincidunt iaculis metus non semper. Suspendisse accumsan sagittis dui ac fringilla. Vestibulum dictum urna sed risus fringilla venenatis.';

const headerWrapperStyle = {
  backgroundColor: primaryColor,
  flexDirection: 'column',
  height: 'auto',
  paddingVertical: mp1,
  borderBottomWidth: 2,
  borderBottomColor: alterColor,
  elevation: 10,
};

const primaryColor = '#f4f6ff';
const backgroundColor = '#f3c623';
const accentColor = '#127681';
const surfaceColor = '#10375c';
const alterColor = '#e9e9e9';
const whiteColor = '#ffffff';
const dangerColor = '#E04A52';

const mp1 = 5;
const mp2 = 10;
const mp3 = 15;
const mp4 = 20;
const mp5 = 25;
const mp6 = 30;

const f1 = 9;
const f2 = 10;
const f3 = 12;
const f4 = 14;
const f5 = 16;
const f6 = 18;
const f7 = 20;
const f8 = 22;

const host = `http://192.168.0.11:8000`;
const api = `${host}/api`;
const hostProducts = `${api}/products`;
const hostSales = `${api}/sales`;
const hostCustomers = `${api}/customers`;
const storagePublic = `${host}/storage/products`;

const fakePhoto =
  'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';

export {
  headerWrapperStyle,
  fakePhoto,
  host,
  api,
  hostProducts,
  hostSales,
  hostCustomers,
  storagePublic,
  primaryColor,
  backgroundColor,
  accentColor,
  surfaceColor,
  alterColor,
  whiteColor,
  dangerColor,
  mp1,
  mp2,
  mp3,
  mp4,
  mp5,
  mp6,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  kategori,
  sort,
  lorem,
};
