const fs = require('fs');
const path = require('path');

/**
 * Unit tests for UzumMarket.css
 * 
 * These tests assume a Jest environment with JSDOM enabled.
 * It verifies that critical style rules are correctly applied to elements.
 */
describe('UzumMarket.css Styles', () => {
    let cssContent;

    beforeAll(() => {
        // Load the CSS file content
        const cssPath = path.join(__dirname, 'UzumMarket.css');
        cssContent = fs.readFileSync(cssPath, 'utf8');

        // Inject the CSS into the virtual DOM head
        const styleElement = document.createElement('style');
        styleElement.textContent = cssContent;
        document.head.appendChild(styleElement);
    });

    test('should apply global reset and default font', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        
        const styles = window.getComputedStyle(div);
        
        // Verify box-sizing reset
        expect(styles.boxSizing).toBe('border-box');
        // Verify margin/padding reset
        expect(styles.margin).toBe('0px');
        expect(styles.padding).toBe('0px');
    });

    test('should apply flex layout to the header', () => {
        const header = document.createElement('div');
        header.className = 'header';
        document.body.appendChild(header);

        const styles = window.getComputedStyle(header);
        
        expect(styles.display).toBe('flex');
        expect(styles.justifyContent).toBe('center');
        expect(styles.alignItems).toBe('center');
        expect(styles.gap).toBe('25px');
    });

    test('should style the CatalogueButton correctly', () => {
        const button = document.createElement('button');
        button.className = 'CatalogueButton';
        document.body.appendChild(button);

        const styles = window.getComputedStyle(button);

        // #0009FF converts to rgb(0, 9, 255)
        expect(styles.backgroundColor).toBe('rgb(0, 9, 255)');
        expect(styles.color).toBe('white');
        expect(styles.borderRadius).toBe('12px');
        expect(styles.border).toBe(''); // JSDOM often returns empty for 'none' or shorthand
        expect(styles.cursor).toBe('pointer');
    });

    test('should style input fields within SearchBar', () => {
        // Setup DOM structure: .SearchBar > input
        const searchBar = document.createElement('div');
        searchBar.className = 'SearchBar';
        
        const input = document.createElement('input');
        searchBar.appendChild(input);
        document.body.appendChild(searchBar);

        const styles = window.getComputedStyle(input);

        expect(styles.width).toBe('100%');
        expect(styles.padding).toBe('14px');
        expect(styles.borderRadius).toBe('12px');
        // Note: Border shorthand expansion can vary in JSDOM, checking specific properties is safer
        expect(styles.borderTopStyle).not.toBe('none'); 
    });
});
