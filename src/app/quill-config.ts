import Quill from 'quill';
import BlotFormatter from '@enzedonline/quill-blot-formatter2';

// Register blot formatter
Quill.register('modules/blotFormatter', BlotFormatter);

// CAST Font format
const Font = Quill.import('formats/font') as any;
Font.whitelist = [
  'certificate', 'play', 'helveticabold', 'helveticastd', 'opensans', 'opensans-semi', 'opensans-bold',
  'roboto-bold', 'roboto-medium', 'alegreyasc-regular', 'ptserif-regular', 'nyala', 'alex', 'alex-regular',
  'ovo', 'calibri', 'museoslab', 'kadwa-regular', 'kron-regular', 'poly-regular', 'poppins-regular',
  'allura-regular', 'archivo-regular', 'cinzel-regular', 'raleway-light', 'raleway-bold', 'italianno-regular',
  'verdana', 'verdana-bold', 'montserrat-regular', 'vollkorn-italic', 'montserrat-semibold',
  'cormor-regular', 'mirza', 'roboto', 'aref', 'acme', 'archivo', 'cantarell', 'comfortaa', 'courgette',
  'fredoka', 'great', 'hind', 'jomhuria', 'kanit', 'kaushan', 'manuale', 'maven', 'monda', 'orbitron',
  'overpass', 'quat', 'satisfy', 'signika', 'serif', 'sansserif', 'monospace'
];
Quill.register(Font, true);

// CAST Size format
const Size = Quill.import('formats/size') as any;
Size.whitelist = [
  '8','10','12','14','16','18','20','22','24','26','28','30','32','34','36','38','40',
  '42','44','46','48','50','52','54','56','58','60'
];
Quill.register(Size, true);

export default Quill;
