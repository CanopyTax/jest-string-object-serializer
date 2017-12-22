# jest-string-object-serializer
A jest snapshot serializer for String objects. Made for when you have a `String` object passed to React props that you want to serialize. E.g., `<div className={new String('val')} />` will have a weird snaphsot output by default, which this project fixes.

#### Usage

1. Install

```bash
npm install --save-dev jest-string-object-serializer
# Or yarn add --dev jest-string-object-serializer
```

2. jest.json configuration

```json
{
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-string-object-serializer/lib/serializer"
  ],
}
```

If you're using react and enzyme, you probably should also add `"<rootDir>/node_modules/enzyme-to-json/serializer"` as a snapshot serializer to get the react snapshots to look right.
