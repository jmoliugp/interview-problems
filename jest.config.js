require('dotenv/config')

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  resetMocks: true,
  testEnvironment: 'node',
}
