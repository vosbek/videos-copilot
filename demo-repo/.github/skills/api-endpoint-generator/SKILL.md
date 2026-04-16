---
name: api-endpoint-generator
description: "Generates new Flask REST API endpoints with SQLAlchemy models, Blueprint routes, CRUD operations, input validation, and pytest test suites following the project's existing patterns. Use when asked to create, scaffold, or add a new API endpoint, resource, or route."
---

# API Endpoint Generator

Generate complete Flask REST API endpoints following the Tailspin Toys project patterns.

## When to Use

Activate when the user asks to:
- Create a new API endpoint or resource
- Add CRUD operations for a new entity
- Scaffold a new route with model and tests
- Generate a new API following existing patterns

## Generation Process

### Step 1: Study Existing Patterns

Before generating anything, read these files to understand the project patterns:
- `server/models/game.py` - Model pattern (SQLAlchemy, to_dict method)
- `server/routes/games.py` - Route pattern (Blueprint, CRUD operations)
- `server/tests/test_games.py` - Test pattern (pytest fixtures, assertions)
- `server/app.py` - Blueprint registration pattern

### Step 2: Generate Model

Create `server/models/{resource}.py`:

```python
from models import db

class ResourceName(db.Model):
    __tablename__ = 'resource_names'

    id: int = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # Add fields based on requirements
    name: str = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
```

### Step 3: Generate Routes

Create `server/routes/{resource}.py`:

```python
from flask import Blueprint, jsonify, request
from models import db
from models.resource import ResourceName

resource_bp = Blueprint('resource', __name__)

@resource_bp.route('/resources', methods=['GET'])
def get_resources() -> tuple:
    resources = ResourceName.query.all()
    return jsonify([r.to_dict() for r in resources]), 200

@resource_bp.route('/resources/<int:id>', methods=['GET'])
def get_resource(id: int) -> tuple:
    resource = ResourceName.query.get_or_404(id)
    return jsonify(resource.to_dict()), 200

@resource_bp.route('/resources', methods=['POST'])
def create_resource() -> tuple:
    data = request.get_json()
    if not data or 'name' not in data:
        return jsonify({'error': 'name is required'}), 400
    resource = ResourceName(name=data['name'])
    db.session.add(resource)
    db.session.commit()
    return jsonify(resource.to_dict()), 201

@resource_bp.route('/resources/<int:id>', methods=['PUT'])
def update_resource(id: int) -> tuple:
    resource = ResourceName.query.get_or_404(id)
    data = request.get_json()
    if 'name' in data:
        resource.name = data['name']
    db.session.commit()
    return jsonify(resource.to_dict()), 200

@resource_bp.route('/resources/<int:id>', methods=['DELETE'])
def delete_resource(id: int) -> tuple:
    resource = ResourceName.query.get_or_404(id)
    db.session.delete(resource)
    db.session.commit()
    return jsonify({'message': 'deleted'}), 200
```

### Step 4: Generate Tests

Create `server/tests/test_{resource}.py`:

```python
import pytest
from server.app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_resources(client):
    response = client.get('/resources')
    assert response.status_code == 200

def test_create_resource(client):
    response = client.post('/resources', json={'name': 'Test'})
    assert response.status_code == 201

def test_create_resource_missing_name(client):
    response = client.post('/resources', json={})
    assert response.status_code == 400

def test_get_resource_not_found(client):
    response = client.get('/resources/99999')
    assert response.status_code == 404
```

### Step 5: Register

Add to `server/app.py`:
```python
from routes.resource import resource_bp
app.register_blueprint(resource_bp)
```

Add to `server/models/__init__.py`:
```python
from models.resource import ResourceName
```

### Step 6: Verify

Run `pytest -v` to confirm all tests pass.
